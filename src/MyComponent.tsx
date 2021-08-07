import React from 'react';

const MyComponent = ({
  name = 'default',
  age = 21,
  children,
}: React.PropsWithChildren<IProps>) => {
  return (
    <div>
      안녕하세요 제 이름은 {name} 입니다 <br />제 나이는 {age}입니다.
      <br />
      chilren 값은 {children}입니다
    </div>
  );
};

interface IProps {
  name?: string;
  age: number;
}

export default MyComponent;
