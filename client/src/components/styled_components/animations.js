import { keyframes } from "styled-components";

export const spin = keyframes`{
    0%{
        transform:rotate(0deg);
    }100%{
        transform:rotate(360deg);
    }
}`;

export const enter = keyframes`{
    0%{
        opacity:0;
        transform:translateY(-40px);
    }100%{
        opacity:1;
        transform:translateY(0);
    }
}`;
