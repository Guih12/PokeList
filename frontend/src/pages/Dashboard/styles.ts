import styled from 'styled-components';
import {shade} from 'polished'

export const Navbar = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    img{
        width: 120px;
        padding: 10px 0;
    }

    a{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        color: #3A5CA8;
    }
`
export const Cardform = styled.section`
    max-width: 560px;
    justify-content: center;
    margin: 0 auto;
    
    h1{
        margin-top: 50px;
        text-align: center;
        font-size: 40px;
        color: #5D81D1;
    }

    form{
        display: flex;
        margin-top: 16px;
        input{
            padding: 14px;
            flex: 1;
            border: 0;
        }
        button{
            width: 173px;
            border: 0;
            background:#3A5CA8;
            font-size: 18px;
            color: #FAF9F8;
            font-weight: bold;
            transition: background-color 0.2s;
            &:hover{
            background: ${shade(0.2, '#3A5CA8')};
        }
        }
        
    }
`;


export const Container = styled.section`
    max-width: 960px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    background: #88ABFA;
    border-radius: 4px;
    flex-wrap: wrap;
`;

export const Cardlist = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 279px;
   height: 300px;
   background: #F1F1F1;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 4px;
   margin: 20px;
   transition: transform 0.2s ease-in-out;

   &:hover{
       transform: translateY(-10px);
   }
   img{
    width: 200px;
    height: 200px
   }

   div{
       margin-top: 20px;
       width: 100%;
       display: flex;
       justify-content: space-around;
       align-items: center;
       margin-left: 5px;

       span{
           font-size: 24px;
           font-weight: bold;
           color: #5D81D1;
       }
       p{
            font-size: 24px;
           font-weight: bold;
           color: #5D81D1;
       }
   }

`;

export const Error = styled.span`
    margin-top: 10px;
    color: red;
`;