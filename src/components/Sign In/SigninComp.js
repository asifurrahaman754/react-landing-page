import styled from "styled-components";
import { Link } from "react-router-dom";

const FormContainer = styled.section`
  width: 100%;
  height: 600px;
  display: grid;
  place-items: center;
  position: relative;
  background: #e3e3e3;
`;

const BackIcon = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Image = styled.img``;

const Form = styled.form`
  background: black;
  color: white;
  padding: 50px 30px;
  border-radius: 8px;
  margin: 0px 20px;
`;

const FormHead = styled.h3`
  margin-bottom: 3rem;
  font-size: 1.6rem;
  color: #ffffffd1;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLebel = styled.label`
  display: block;
`;

const FormField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 6px;
  border: none;
  font-size: 0.8rem;
`;

const FormSubmit = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  font-size: 1rem;
  background: #01bf71;
  color: white;
`;

const FormSpan = styled.span`
  font-size: 0.8rem;
  text-align: center;
  display: block;
  margin-top: 10px;
  color: #ffffffad;
  letter-spacing: -0.2px;
`;
export {
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
};
