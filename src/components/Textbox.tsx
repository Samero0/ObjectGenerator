import { styled } from 'styled-components'

interface TextBoxProps{
    id: string;
    placeholder: string;
    value?: string;
}

const StyledTextBox = styled.textarea`
    padding: 10px;
    background-color: #383838;
    color: white;
    width: 100%;
    height: 250px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 13px;
    border: 1px lightgrey solid;
    border-radius: 10px;
    box-shadow: 1px 1px lightgrey; 
    &::placeholder{
        color: white;
        font-family: 'Courier New', Courier, monospace;
    }
`;

const TextBox : React.FC<TextBoxProps> = ({id, placeholder, value}) => {
    return (
        <StyledTextBox id={id} placeholder={placeholder} value={value}/>
    );
}

export default TextBox;