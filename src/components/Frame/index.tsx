import styled from "styled-components";

interface FrameWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
}

// 640 384

const FrameWrapper = styled.div<FrameWrapperProps>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  padding: 0;
  overflow: hidden;
`;

interface FrameComponentProps extends React.IframeHTMLAttributes<{}> {
  width: string;
  height: string;
}

// 1280 786

const FrameComponent = styled.iframe<FrameComponentProps>`
  zoom: 0.5;
  transform: scale(0.5);
  transform-origin: 0 0;

  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border: 1px solid black;
`;

interface FrameProps extends Omit<FrameComponentProps, "width" | "height"> {
  innerWidth: string;
  innerHeight: string;
  outerWidth: string;
  outerHeight: string;
}

export const Frame: React.FC<FrameProps> = ({
  innerWidth,
  innerHeight,
  outerWidth,
  outerHeight,
  ...props
}) => {
  return (
    <FrameWrapper width={outerWidth} height={outerHeight}>
      <FrameComponent {...props} width={innerWidth} height={innerHeight} />
    </FrameWrapper>
  );
};
