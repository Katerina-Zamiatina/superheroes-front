import { useState, useEffect, useMemo } from 'react';

const useFileReader = file => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    if (file) {
      startReading(file);
    }
  }, [file]);

  const reader = useMemo(() => new FileReader(), []);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const onLoadSuccess = e => {
    const { result } = e?.currentTarget || {};

    setFileUrl(result);
  };

  const startReading = file => {
    if (!file) {
      throw new Error('[useFileReader]: startReading => provide a file');
    }
    reader.readAsDataURL(file);
    reader.onloadstart = onLoadStart;
    reader.onloadend = onLoadEnd;
    reader.onload = onLoadSuccess;
  };

  return { isLoading, fileUrl };
};

export default useFileReader;
