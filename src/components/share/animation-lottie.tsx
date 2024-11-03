import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useMemo, useRef } from 'react';

interface IAnimationLottieProps {
  animationPath: object;
  width?: string;
}

const AnimationLottie = ({
  animationPath,
  width = '95%',
}: IAnimationLottieProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width,
      },
      lottieRef: lottieRef,
    };
  }, [animationPath, width]);

  useEffect(() => {
    const currentLottieRef = lottieRef.current;
    return () => {
      if (currentLottieRef) currentLottieRef.destroy();
    };
  }, []);

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
