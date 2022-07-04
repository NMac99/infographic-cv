import { FC, ReactElement, useEffect, useRef } from 'react';
import Gradient from 'javascript-color-gradient';

type Props = {
  data: Array<{
    id: number;
    percent: number;
    key: string;
    name: string;
    link: string;
  }>;
};

const PieChart: FC<Props> = ({ data }): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const globalStyles = window.getComputedStyle(document.body);
      const colorGradient = new Gradient();
      colorGradient.setGradient(
        globalStyles.getPropertyValue('--color-4'),
        globalStyles.getPropertyValue('--color-3')
      );
      colorGradient.setMidpoint(data.length);
      const angleStep = (2 * Math.PI) / data.length;
      let previousAngle = -Math.PI / 2;
      const sortedData = [...data].sort(
        (item1, item2) => item1.percent - item2.percent
      );

      const Links: string[] = []; // Links information
      let hoverLink = ''; // Href of the link which cursor points at

      // Draw the link
      const drawLink = (x: number, y: number, href: string, title: string) => {
        const linkTitle = title,
          linkWidth = ctx.measureText(linkTitle).width,
          linkHeight = parseInt(ctx.font.match(/\d+/)?.[0] || '0'); // Get lineheight out of fontsize

        // Draw the link
        ctx.fillText(linkTitle, x, y);

        // Add mouse listeners
        canvas.addEventListener('mousemove', on_mousemove, false);
        canvas.addEventListener('click', on_click, false);

        // Add link params to array
        Links.push(
          x + ';' + y + ';' + linkWidth + ';' + linkHeight + ';' + href
        );
      };

      // Link hover
      const on_mousemove = (ev: any) => {
        let x, y;

        // Get the mouse position relative to the canvas element
        if (ev.layerX || ev.layerX == 0) {
          // For Firefox
          x = ev.layerX;
          y = ev.layerY;
        }

        // Link hover
        for (let i = Links.length - 1; i >= 0; i--) {
          let params = [];

          // Get link params back from array
          params = Links[i].split(';');

          const linkX = parseInt(params[0]),
            linkY = parseInt(params[1]),
            linkWidth = parseInt(params[2]),
            linkHeight = parseInt(params[3]),
            linkHref = params[4];

          // Check if cursor is in the link area
          if (
            x >= linkX &&
            x <= linkX + linkWidth &&
            y >= linkY - linkHeight &&
            y <= linkY
          ) {
            document.body.style.cursor = 'pointer';
            hoverLink = linkHref;
            break;
          } else {
            document.body.style.cursor = '';
            hoverLink = '';
          }
        }
      };

      // Link click
      const on_click = () => {
        if (hoverLink) {
          window.open(hoverLink); // Use this to open in new tab
        }
      };

      for (let i = 0; i < data.length; i++) {
        const deltaX = Math.cos(previousAngle + angleStep / 2) * 5;
        const deltaY = Math.sin(previousAngle + angleStep / 2) * 5;
        const segmentStartX = canvas.width / 2 + deltaX;

        const segmentStartY = canvas.height / 2 + deltaY;
        ctx.beginPath();
        const radius = ((canvas.width / 3 - 5) * data[i].percent) / 100;
        const positionInSortedData = sortedData.findIndex(
          item => item.id === data[i].id
        );

        ctx.arc(
          segmentStartX,
          segmentStartY,
          radius,
          previousAngle,
          previousAngle + angleStep
        );
        ctx.lineTo(segmentStartX, segmentStartY);
        ctx.fillStyle = colorGradient.getColor(positionInSortedData + 1);
        ctx.fill();

        // ATTENTION text section

        setTimeout(() => {
          ctx.fillStyle = colorGradient.getColor(positionInSortedData + 1);
          ctx.font = 'bold 14px quicksand';
          const textMetrics = ctx.measureText(data[i].name);

          drawLink(
            segmentStartX +
              (radius * deltaX) / 5 +
              (deltaX > 0 ? 10 : -10 - textMetrics.width),
            segmentStartY + (radius * deltaY) / 5 + (deltaY > 0 ? 15 : -15),
            data[i].link,
            data[i].name
          );
        });
        previousAngle += angleStep;
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={450}
      height={350}
      style={{ position: 'absolute', left: 0, bottom: -50 }}
    />
  );
};

export default PieChart;
