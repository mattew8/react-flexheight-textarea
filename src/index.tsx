import React, {
  ChangeEventHandler,
  useRef,
  useEffect,
  TextareaHTMLAttributes,
  CSSProperties,
} from "react";

const FlexHeightTextarea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  const { value, onChange: onChangeProps, style: customStyle, ...args } = props;
  const isControlled = value !== undefined;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const changeTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    changeTextareaHeight();
    onChangeProps && onChangeProps(e);
  };

  useEffect(() => {
    if (isControlled) {
      changeTextareaHeight();
    }
  }, [isControlled]);

  const style = {
    ...resetStyle,
    ...customStyle,
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      style={style}
      {...args}
    />
  );
};

export default FlexHeightTextarea;

const resetStyle: CSSProperties = {
  resize: "none",
  border: "none",
  overflow: "auto",
  outline: "none",
  WebkitBoxShadow: "none",
  MozBoxShadow: "none",
  boxShadow: "none",
};
