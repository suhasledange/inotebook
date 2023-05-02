import React from 'react'
import styled from 'styled-components'

function Alert(props) {
    return (
        <Alrt>
            <div class="alert alert-danger" role="alert">
                <h1>{props.Alert.msg}</h1>                    
            </div>
        </Alrt>
    )
}

export default Alert

const Alrt = styled.div`
    position: fixed;
    width: 100%;
    margin-top: 6rem;
    z-index: 100;
    .alert{
        border: none;
        background: var(--color-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
            color: var(--color-bg3);
            font-weight: 600;
            font-size: 1.2rem;
            letter-spacing: 1px;
        }
}
`;