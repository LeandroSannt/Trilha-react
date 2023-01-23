import React, { InputHTMLAttributes, CSSProperties, useState } from "react";

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: CSSProperties;
  register?: any;
  errors?: string | undefined;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  register,
  errors,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Container
        hasErrors={!!errors}
        hasValue={hasValue}
        isFocused={isFocused}
        style={containerStyle}
      >
        <input type="text" {...rest} {...register} />
      </Container>
      {errors && <Error>{errors}</Error>}
    </div>
  );
};
export { Input };
