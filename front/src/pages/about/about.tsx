import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import PageContainer from '../../component/pageContainer';
import PagePath from '../../component/PagePath';
import AboutValue from '../../component/AboutValue';
import AboutSkill from '../../component/AboutSkill';
import WorkProcessItem from './WorkProcessItem';
import { AboutWrapper, Title, SubTitle, AboutItemWrapper, WorkProcessWrapper, SkillListWrapper } from './styled';
import { GET_SKILLS } from './GetSkills.queries';
import { getSkills } from '../../types/api';

const path = [
  { path: '/', name: 'CHANYEONG' },
  { path: '/about', name: 'ABOUT' },
];

const About = () => {
  const { data: frontData } = useQuery<getSkills>(GET_SKILLS, { variables: { type: 'FRONT_END' } });
  const { data: backData } = useQuery<getSkills>(GET_SKILLS, { variables: { type: 'BACK_END' } });
  const { data: devopsData } = useQuery<getSkills>(GET_SKILLS, { variables: { type: 'DEV_OPS' } });

  return (
    <>
      <PageContainer>
        <AboutWrapper>
          <PagePath data={path} />
          <SubTitle>안녕하세요! 저는 프론트엔드 개발자를 꿈꾸고 있는 조찬영입니다.</SubTitle>
          <Title>Values</Title>
          <SubTitle>제가 생각하는개발의 중요한 포인트 세 가지는 다음과 같습니다.</SubTitle>
          <AboutItemWrapper>
            <AboutValue
              engTitle="Fun"
              korTitle="재미"
              content="저는 개발을 좋아합니다. 누군가 가장 좋아하는 취미를 물어본다면 고민없이 개발이라고 얘기할 것입니다. 이 마음가짐을 꾸준히 가지고 항상 즐기며 개발을 하겠습니다."
            />
            <AboutValue
              engTitle="Change"
              korTitle="변화"
              content="기술의 발전으로 인해 개발 분야의 기술 또한 빠른 속도로 변화하고 있습니다. 저는 이 변화를 놓치지 않고 항상 변화에 적응하며 새로운 기술에 적응하겠습니다."
            />
            <AboutValue
              engTitle="Communication"
              korTitle="소통"
              content="현대의 소프트웨어는 크고 복잡해졌습니다. 때문에 개발자들과의 협업과정은 선택이 아니라 필수라고 생각됩니다. 협업을 진행하며 가장 중요한 가치는 협업 이라고 생각하기 때문에 소통하기위해 노력 하겠습니다."
            />
          </AboutItemWrapper>
          <Title>Problem Soving</Title>
          <span>
            개발자로서 개발을 진행하다보면 버그는 피할 수 없다고 생각합니다. 저 역시 개발을 공부한지는 얼마 되지
            않았지만 수많은 이슈들을 만나봤습니다. 그럴때마다 공식 문서를 찾아보거나 구글링, 스택 오버 플로우를 통해
            많은 솔루션을 찾아보고 작은 이슈라도 문서화를 하는 것이 좋다고 생각이 들었습니다.
            <br />
            <br /> 그래서 문제 해결 능력을 기르기 위해 이슈가 발생할 때마다 문서로 솔루션을 정리해 놓고 이미 솔루션을
            아는 이슈는 빠르게 해결하고 그렇지 않은 이슈는 어떻게든 솔루션을 찾아서 점점 발전하는 중입니다.
          </span>
          <Title>Work Process</Title>
          <WorkProcessWrapper>
            <WorkProcessItem engName="planning" korName="기획" />
            <WorkProcessItem engName="design" korName="디자인" />
            <WorkProcessItem engName="development" korName="개발" />
            <WorkProcessItem engName="debugging" korName="테스팅" />
            <WorkProcessItem engName="deploy" korName="배포" />
          </WorkProcessWrapper>
          <Title>Skill Stak</Title>
          <SubTitle>Front-End</SubTitle>
          <SkillListWrapper>
            {frontData?.GetSkills?.skill?.map((v) => (
              <AboutSkill key={`about_front_skill${v.id}`} data={v} />
            ))}
          </SkillListWrapper>
          <SubTitle>Back-End</SubTitle>
          <SkillListWrapper>
            {backData?.GetSkills?.skill?.map((v) => (
              <AboutSkill key={`about_back_skill${v.id}`} data={v} />
            ))}
          </SkillListWrapper>
          <SubTitle>DevOps</SubTitle>
          <SkillListWrapper>
            {devopsData?.GetSkills?.skill?.map((v) => (
              <AboutSkill key={`about_devops_skill${v.id}`} data={v} />
            ))}
          </SkillListWrapper>
        </AboutWrapper>
      </PageContainer>
    </>
  );
};

export default About;