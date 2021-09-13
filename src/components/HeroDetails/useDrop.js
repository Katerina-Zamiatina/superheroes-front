import { useEffect, useState, useCallback } from 'react';

const eventsToPrevent = ['drop', 'dragover'];
const eventsStatus = ['dragenter', 'dragleave'];
const dropEvent = ['drop'];

const useDrop = ref => {
  const [file, setFile] = useState(null);
  const [active, setActive] = useState(false);

  const prevent = useCallback(e => {
    e.preventDefault();
  }, []);

  const drop = useCallback(e => {
    const [droppedFile] = e?.dataTransfer?.files;
    setFile(droppedFile);
    setActive(false);
  }, []);

  const setStatus = useCallback(
    e => () => {
      if (e?.includes('dragenter')) {
        setActive(true);
      } else {
        setActive(false);
      }
    },
    [],
  );
  const refCurrent = ref?.current;

  useEffect(() => {
    if (refCurrent) {
      eventsToPrevent.forEach(event => {
        refCurrent.addEventListener(event, prevent);
      });
      eventsStatus.forEach(event => {
        refCurrent.addEventListener(event, setStatus(event));
      });
      dropEvent.forEach(event => {
        refCurrent.addEventListener(event, drop);
      });
    }
    return () => {
      if (refCurrent) {
        eventsToPrevent.forEach(event => {
          refCurrent.removeEventListener(event, prevent);
        });
        eventsStatus.forEach(event => {
          refCurrent.removeEventListener(event, setStatus(event));
        });
        dropEvent.forEach(event => {
          refCurrent.removeEventListener(event, drop);
        });
      }
    };
    // eslint-disable-next-line
  }, [ref?.current]);

  return { file, active };
};

export default useDrop;
