import React from 'react'
import { IntroContainer, IntroLeftContainer, Img, IntroRightContainer, IntroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './styles'
import Pic from '../../images/Image.jpg'
import Typewriter from 'typewriter-effect';
import { bioData } from '../../data/data';

const Intro = () => {
    return (
        <div id="About">
            <IntroContainer>
                <IntroInnerContainer >
                    <IntroLeftContainer id="Left">
                        <Title>Hello! I am <br /> {bioData.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: bioData.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{bioData.description}</SubTitle>
                        <ResumeButton href={bioData.resume} target='display'>Download Resume</ResumeButton>
                    </IntroLeftContainer>

                    <IntroRightContainer id="Right">
                        <Img src={Pic} alt="hero-image" />
                    </IntroRightContainer>
                </IntroInnerContainer>

            </IntroContainer>
        </div>
    )
}

export default Intro