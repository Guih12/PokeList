import styled from 'styled-components';
import {shade} from 'polished'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
   padding: 50px;
   background: #FAF9F8;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
   border-radius: 8px;

   img{
       margin-top: 20px;
   }

  form{
      margin: 80px 0;
      width: 340px;
    
      label{
          display: block;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: bold;
          color: #3A5CA8;
      }
      input{
          width: 100%;
          padding: 13px;
          border-radius: 4px;
          border: 0;
          background: #F6F4F4;
      }

      &::placeholder{
          color: #E4E4E7;
          font-size: 14px;
      }

      button{
          width: 100%;
          padding: 13px;
          margin-top: 30px;
          border: 0;
          border-radius: 4px;
          background: #3A5CA8;
          color: #FAF9F8;
          font-size: 18px;
          font-weight: bold;
          transition: background-color 0.2;

          &:hover{
            background: ${shade(0.2, '#3A5CA8')};
          }
      }
  }
`;