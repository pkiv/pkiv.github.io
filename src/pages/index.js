import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Aeonik';
    font-style: normal;
    font-weight: 500;
    margin-bottom: 10%;
`;

const Icon = styled.div`
    position: fixed;
    top: 0.5%;
    right: 0%;
    height: 5%;
    width: 5%;
    max-height: 5%;
    max-width: 5%;
    z-index: 99;
    cursor: pointer;
    svg {
        display: block;
        margin: auto;
        width: 50%;
        height: auto;
    }
`;
const Hero = styled.div`
    align-self: center;
    margin-left: 12%;
    margin-right: 12%;
`;
const Name = styled.div`
    text-align: left;
    @media screen and (min-width: 601px) {
        font-size: 80px;
    }

    /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
    @media screen and (max-width: 600px) {
        font-size: 30px;
    }
`;
const Description = styled.div`
    text-align: left;
    @media screen and (min-width: 601px) {
        font-size: 36px;
    }
    /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
    @media screen and (max-width: 600px) {
        font-size: 16px;
    }
`;
const Main = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`;
const BoxGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5%;
    @media screen and (min-width: 601px) {
        margin-left: 8%;
        margin-right: 8%;
    }
    @media screen and (max-width: 600px) {
        margin-left: 2%;
        margin-right: 2%;
    }

    .box {
        width: 32%;
        margin-bottom: 2%;
        max-height: 400px;
        max-width: 400px;
        min-height: 80px;
        min-width: 80px;
        flex: 0 0 32%;
        background-color: #0f1223;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        border-radius: 10%;
    }
    svg {
        display: block;
        margin: auto;
        width: 50%;
        height: auto;
    }

    img:hover {
        transition: filter 0.5s ease-in-out;
        filter: none;
        -webkit-filter: grayscale(0%);
    }
`;
const ImageBox = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10%;
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
`;

const TopLine = styled.div`
    border: 1px solid #d56d6b;
    background: #d56d6b;
    transform: rotate(-180deg);
    width: 50%;
    margin-left: -9%;
    margin-top: 2%;
    margin-bottom: 2%;
`;

const BottomLine = styled.div`
    border: 1px solid #d56d6b;
    background: #d56d6b;
    transform: rotate(-180deg);
    align-self: center;
    width: 70%;
    margin-top: 2%;
    margin-bottom: 4%;
`;

const TalkButton = styled.div`
    background: #d56d6b;
    align-self: center;
    text-align: center;
    cursor: pointer;
    @media screen and (min-width: 601px) {
        font-size: 36px;
        border-radius: 30px;
        width: 25%;
        padding-top: 1.2%;
        padding-bottom: 1.2%;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
        border-radius: 30px;
        width: 35%;
        padding-top: 1.5%;
        padding-bottom: 1.5%;
    }
`;

export default function Index() {
    return (
        <Content>
            <Icon
                onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
            >
                <svg
                    width="31"
                    height="90"
                    viewBox="0 0 31 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="7.5"
                        cy="65.5"
                        r="7.5"
                        transform="rotate(90 7.5 65.5)"
                        fill="#D56D6B"
                    />
                    <circle
                        cx="7.5"
                        cy="23.5"
                        r="7.5"
                        transform="rotate(90 7.5 23.5)"
                        fill="#D56D6B"
                    />
                    <circle
                        cx="7.5"
                        cy="44.5"
                        r="7.5"
                        transform="rotate(90 7.5 44.5)"
                        fill="#D56D6B"
                    />
                    <line
                        x1="29"
                        y1="8.74228e-08"
                        x2="29"
                        y2="90"
                        stroke="#D56D6B"
                        stroke-width="4"
                    />
                </svg>
            </Icon>
            <Main>
                <Hero>
                    <Name>Paul Klein</Name>
                    <TopLine></TopLine>
                    <Description>
                        I'm a code creator and problem solver from San
                        Francisco. My specialty is bringing software teams
                        together to accomplish the impossible.{' '}
                        <p>
                            Currently I’m working on Stream, where the world's
                            creators become digital entrepreneurs.
                        </p>
                    </Description>
                </Hero>
                <BoxGrid>
                    <div class="box">
                        <ImageBox src="1.png"></ImageBox>
                    </div>
                    <div
                        class="box"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                            window.open('mailto:hello@paulkle.in', '_blank')
                        }
                    >
                        <svg
                            width="193"
                            height="127"
                            viewBox="0 0 193 127"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask id="path-1-inside-1" fill="white">
                                <rect width="193" height="127" rx="10" />
                            </mask>
                            <rect
                                width="193"
                                height="127"
                                rx="10"
                                stroke="#E4432D"
                                stroke-width="26"
                                stroke-linejoin="round"
                                mask="url(#path-1-inside-1)"
                            />
                            <path
                                d="M7.5 7.5L91.9415 79.6073C94.5652 81.8478 98.4302 81.8424 101.048 79.5947L185 7.5"
                                stroke="#E4432D"
                                stroke-width="13"
                            />
                        </svg>
                    </div>
                    <div class="box">
                        <ImageBox src="2.jpg"></ImageBox>
                    </div>
                    <div
                        class="box"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                            window.open('https://twitter.com/pk_iv', '_blank')
                        }
                    >
                        <svg
                            width="197"
                            height="160"
                            viewBox="0 0 197 160"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M196.614 19.0537C189.35 22.2443 181.594 24.4179 173.427 25.4104C181.75 20.3988 188.152 12.5001 191.181 3.07582C183.375 7.62803 174.724 10.9417 165.514 12.7872C158.16 4.92131 147.678 0 136.039 0C113.738 0 95.6559 18.0694 95.6559 40.3301C95.6559 43.529 96.0253 46.6048 96.6983 49.5494C63.1277 47.9664 33.3737 31.8573 13.4611 7.505C9.95629 13.427 7.99458 20.3086 7.99458 27.8054C7.99458 41.8311 15.1355 54.159 25.9537 61.4015C19.3298 61.1883 13.1 59.3674 7.66626 56.349V56.8493C7.66626 76.4115 21.5624 92.7257 40.055 96.4413C36.6651 97.3517 33.0864 97.8438 29.4174 97.8438C26.8401 97.8438 24.3695 97.5978 21.8989 97.1385C27.0782 113.157 41.9675 124.837 59.6885 125.165C45.8991 135.984 28.4243 142.431 9.60335 142.431C6.40223 142.431 3.20932 142.242 0 141.881C17.9673 153.315 39.1357 160 62.0278 160C136.343 160 176.931 98.5164 176.931 45.2843C176.931 43.57 176.931 41.8393 176.808 40.1169C184.696 34.4656 191.583 27.3215 197 19.2177L196.614 19.0537Z"
                                fill="#3D8AFA"
                            />
                        </svg>
                    </div>
                    <div class="box">
                        <ImageBox src="3.JPG"></ImageBox>
                    </div>
                    <div
                        class="box"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                            window.open(
                                'https://www.linkedin.com/in/paulleoklein/',
                                '_blank',
                            )
                        }
                    >
                        <svg
                            width="160"
                            height="160"
                            viewBox="0 0 160 160"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M136.313 136.347H112.62V99.22C112.62 90.3667 112.44 78.9733 100.273 78.9733C87.92 78.9733 86.0333 88.6067 86.0333 98.5667V136.347H62.34V60H85.1V70.4067H85.4067C88.5867 64.4067 96.32 58.0733 107.873 58.0733C131.88 58.0733 136.32 73.8733 136.32 94.44V136.347H136.313ZM35.58 49.5533C27.9533 49.5533 21.8267 43.38 21.8267 35.7867C21.8267 28.2 27.96 22.0333 35.58 22.0333C43.18 22.0333 49.34 28.2 49.34 35.7867C49.34 43.38 43.1733 49.5533 35.58 49.5533ZM47.46 136.347H23.7V60H47.46V136.347ZM148.167 0H11.8067C5.28 0 0 5.16 0 11.5267V148.473C0 154.847 5.28 160 11.8067 160H148.147C154.667 160 160 154.847 160 148.473V11.5267C160 5.16 154.667 0 148.147 0H148.167Z"
                                fill="#3D8AFA"
                            />
                        </svg>
                    </div>
                    <div class="box">
                        <ImageBox src="4.PNG"></ImageBox>
                    </div>
                    <div
                        class="box"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                            window.open(
                                'https://www.instagram.com/pk.iv/',
                                '_blank',
                            )
                        }
                    >
                        <svg
                            width="160"
                            height="160"
                            viewBox="0 0 160 160"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M80 0C58.2667 0 55.5533 0.1 47.02 0.48C38.5 0.88 32.7 2.22 27.6 4.2C22.34 6.24 17.8733 8.98 13.4267 13.4267C8.98 17.8733 6.23333 22.3333 4.2 27.6C2.22 32.7 0.873333 38.5 0.48 47.02C0.08 55.5533 0 58.2667 0 80C0 101.733 0.1 104.447 0.48 112.98C0.88 121.493 2.22 127.3 4.2 132.4C6.24 137.653 8.98 142.127 13.4267 146.573C17.8733 151.013 22.3333 153.767 27.6 155.8C32.7067 157.773 38.5067 159.127 47.02 159.52C55.5533 159.92 58.2667 160 80 160C101.733 160 104.447 159.9 112.98 159.52C121.493 159.12 127.3 157.773 132.4 155.8C137.653 153.76 142.127 151.013 146.573 146.573C151.013 142.127 153.767 137.673 155.8 132.4C157.773 127.3 159.127 121.493 159.52 112.98C159.92 104.447 160 101.733 160 80C160 58.2667 159.9 55.5533 159.52 47.02C159.12 38.5067 157.773 32.6933 155.8 27.6C153.76 22.34 151.013 17.8733 146.573 13.4267C142.127 8.98 137.673 6.23333 132.4 4.2C127.3 2.22 121.493 0.873333 112.98 0.48C104.447 0.08 101.733 0 80 0ZM80 14.4C101.353 14.4 103.9 14.5067 112.333 14.8733C120.133 15.24 124.367 16.5333 127.18 17.64C130.927 19.0867 133.58 20.82 136.393 23.6133C139.187 26.4133 140.92 29.0733 142.367 32.82C143.46 35.6333 144.767 39.8667 145.12 47.6667C145.5 56.1067 145.587 58.64 145.587 80C145.587 101.36 145.487 103.9 145.093 112.333C144.687 120.133 143.387 124.367 142.287 127.18C140.793 130.927 139.093 133.58 136.293 136.393C133.5 139.187 130.8 140.92 127.093 142.367C124.293 143.46 119.993 144.767 112.193 145.12C103.7 145.5 101.2 145.587 79.8 145.587C58.3933 145.587 55.8933 145.487 47.4067 145.093C39.6 144.687 35.3 143.387 32.5 142.287C28.7067 140.793 26.1 139.093 23.3067 136.293C20.5 133.5 18.7067 130.8 17.3067 127.093C16.2067 124.293 14.9133 119.993 14.5067 112.193C14.2067 103.793 14.1 101.2 14.1 79.9C14.1 58.5933 14.2067 55.9933 14.5067 47.4933C14.9133 39.6933 16.2067 35.4 17.3067 32.6C18.7067 28.8 20.5 26.2 23.3067 23.3933C26.1 20.6 28.7067 18.8 32.5 17.4067C35.3 16.3 39.5067 15 47.3067 14.6C55.8067 14.3 58.3067 14.2 79.7 14.2L80 14.4ZM80 38.92C57.3 38.92 38.92 57.32 38.92 80C38.92 102.7 57.32 121.08 80 121.08C102.7 121.08 121.08 102.68 121.08 80C121.08 57.3 102.68 38.92 80 38.92ZM80 106.667C65.2667 106.667 53.3333 94.7333 53.3333 80C53.3333 65.2667 65.2667 53.3333 80 53.3333C94.7333 53.3333 106.667 65.2667 106.667 80C106.667 94.7333 94.7333 106.667 80 106.667ZM132.307 37.3C132.307 42.6 128 46.9 122.707 46.9C117.407 46.9 113.107 42.5933 113.107 37.3C113.107 32.0067 117.413 27.7067 122.707 27.7067C127.993 27.7 132.307 32.0067 132.307 37.3Z"
                                fill="#E4432D"
                            />
                        </svg>
                    </div>
                    <div class="box">
                        <ImageBox src="5.png"></ImageBox>
                    </div>
                </BoxGrid>
                <BottomLine></BottomLine>
                <TalkButton
                    onClick={() =>
                        window.open('mailto:hello@paulkle.in', '_blank')
                    }
                >
                    Let's Talk
                </TalkButton>
            </Main>
        </Content>
    );
}
