import svg from "../../assets/images/back.svg";
import {
  FormContainer,
  BackIcon,
  Image,
  Form,
  FormHead,
  FormGroup,
  FormLebel,
  FormField,
  FormSubmit,
  FormSpan,
} from "./SigninComp";

export default function SignIn() {
  return (
    <>
      <FormContainer>
        <BackIcon to="/">
          <Image src={svg} />
        </BackIcon>
        <Form>
          <FormHead>Sign in to your account</FormHead>
          <FormGroup>
            <FormLebel htmlFor="email">Email</FormLebel>
            <FormField required type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <FormLebel htmlFor="password">Password</FormLebel>
            <FormField required type="password" id="password" />
          </FormGroup>
          <FormSubmit type="submit">Continue</FormSubmit>
          <FormSpan>Forget Password ?</FormSpan>
        </Form>
      </FormContainer>
    </>
  );
}
