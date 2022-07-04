import {
  CSSProperties,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react';
import USER from 'constants/user';
import Gradient from 'javascript-color-gradient';

import {
  TimelineSnippetStamp,
  Wrapper,
  SnippetTitle,
  SnippetDescription,
  SnippetData,
  Container,
  TimestampVacancy
} from './style';

type Props = {};

const monthDiff = (dateFrom: Date, dateTo: Date): number => {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
};

const ORDERED_ARRAY = USER.education.sort((a, b) => a.order - b.order);

const Timeline: FC<Props> = (): ReactElement => {
  const [timelineMaxValue, setTimelineMaxValue] = useState<number>(0);
  const colors = useRef<string[]>([]);

  useEffect(() => {
    const timelineLengthByMonths = USER.education.reduce((prev, cur) => {
      const diff = monthDiff(cur.startDate, cur.endDate);

      return prev + diff;
    }, 0);

    /* eslint-disable */

    const globalStyles = window.getComputedStyle(document.body);
    const colorGradient = new Gradient();
    colorGradient.setGradient(
      globalStyles.getPropertyValue('--color-4'),
      globalStyles.getPropertyValue('--color-3')
    );
    colorGradient.setMidpoint(USER.education.length);
    colors.current = colorGradient.getArray();

    setTimelineMaxValue(timelineLengthByMonths);
  }, []);

  return (
    <Container>
      <Wrapper>
        {ORDERED_ARRAY.map((entity, id, array) => (
          <div
            key={entity.id}
            style={
              {
                width: `${Math.round(
                  (monthDiff(entity.startDate, entity.endDate) /
                    timelineMaxValue) *
                    100
                )}%`,
                color: colors.current[entity.id],
                '--element-bottom-offset': `${id * 12}px`
              } as CSSProperties
            }
            {...(id + 1 === array.length && { 'data-last': 'true' })}
            {...(id === 0 && { 'data-first': 'true' })}
            {...(entity.continuing && { 'data-continuing': 'true' })}
          >
            <SnippetData
              {...(id === array.length - 1 && {
                style: { whiteSpace: 'nowrap' }
              })}
            >
              <SnippetTitle>{entity.entityTitle}</SnippetTitle>
              <SnippetDescription color={colors.current[entity.id]}>
                {entity.entityDescription}
              </SnippetDescription>
            </SnippetData>
            <div
              className="color-rect"
              style={{
                width: `100%`,
                backgroundColor: colors.current[entity.id],
                height: 20 * (id + 1)
              }}
            />
            <TimelineSnippetStamp>
              {entity.startDate.getFullYear()}
            </TimelineSnippetStamp>
          </div>
        ))}
      </Wrapper>

      <div style={{ display: 'flex', marginTop: 10 }}>
        {ORDERED_ARRAY.map((entity, id, array) => {
          return (
            <div
              key={entity.id}
              style={{
                display: 'flex',
                width: `${Math.round(
                  (monthDiff(entity.startDate, entity.endDate) /
                    timelineMaxValue) *
                    100
                )}%`
              }}
            >
              {entity.extra?.map((vacancy, index, array) => (
                <div
                  key={vacancy.id}
                  style={
                    !vacancy.year
                      ? { flex: 1 }
                      : {
                          width: `${
                            (12 / monthDiff(entity.startDate, entity.endDate)) *
                            100
                          }%`,
                          height: 24,
                          background: colors.current[entity.id],
                          filter: 'grayscale(1)',
                          opacity: (index + 1) / array.length
                        }
                  }
                />
              ))}
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginTop: 48 }}>
        {ORDERED_ARRAY.map((entity, id, array) => {
          return (
            <div
              key={entity.id}
              style={{
                display: 'flex',
                width: `${Math.round(
                  (monthDiff(entity.startDate, entity.endDate) /
                    timelineMaxValue) *
                    100
                )}%`
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {entity.extra?.map(
                  (vacancy, index, array) =>
                    !vacancy.gap && (
                      <TimestampVacancy
                        key={vacancy.id}
                        color={colors.current[entity.id]}
                        opacity={(index + 1) / array.length}
                        dangerouslySetInnerHTML={{
                          __html: vacancy.description || ''
                        }}
                      />
                    )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Timeline;
