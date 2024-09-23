import React, {
  ChangeEventHandler,
  useRef,
  useEffect,
  TextareaHTMLAttributes,
} from "react";

const FlexHeightTextarea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  const { value, onChange: onChangeProps, ...args } = props;
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

  return (
    <textarea ref={textareaRef} value={value} onChange={onChange} {...args} />
  );
};

export default FlexHeightTextarea;
