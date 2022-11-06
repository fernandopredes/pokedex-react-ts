import { MainText } from "./Title.style"

type MainTitleProps = {
  text: string

}

const MainTitle = (props: MainTitleProps) => {
  return (
    <>
      <MainText>{props.text}</MainText>
    </>
  )
}

export default MainTitle
