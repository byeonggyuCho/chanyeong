import React from 'react';
import { Helmet } from 'react-helmet';

import PageContainer from '@component/pageContainer';
import PagePath from '@component/PagePath';
import AboutValue from '@component/AboutValue';
import AboutSkill from '@component/AboutSkill';
import Button from '@commons/Button';
import Text, { TITLE } from '@commons/Text';
import { getSkills_GetSkills_skill } from '@gql-types/api';
import UpdateSkillForm from '@component/UpdateSkillForm';
import { LocalSignIn } from '@src/apollo';
import WorkProcessItem from './WorkProcessItem';
import { AboutWrapper, AboutItemWrapper, WorkProcessWrapper, SkillListWrapper } from './styled';

interface Props {
  openAddSkill: boolean;
  userInfo?: LocalSignIn;
  frontSkills: getSkills_GetSkills_skill[];
  backSkills: getSkills_GetSkills_skill[];
  devopsSkills: getSkills_GetSkills_skill[];
  editSkillData: getSkills_GetSkills_skill;
  onClickAddSkill: () => void;
  onClickEditSkill: (data: getSkills_GetSkills_skill) => void;
  closeUpdateSKill: () => void;
}

const path = [
  { path: '/', name: 'CHANYEONG' },
  { path: '/about', name: 'ABOUT' },
];

const AboutPresenter = ({
  closeUpdateSKill,
  openAddSkill,
  onClickAddSkill,
  onClickEditSkill,
  userInfo,
  frontSkills,
  backSkills,
  devopsSkills,
  editSkillData,
}: Props) => (
  <>
    {openAddSkill && <UpdateSkillForm closeUpdateSkill={closeUpdateSKill} editSkillData={editSkillData} />}
    <Helmet>
      <title>소개 :: chanyeong</title>
      <meta
        name="description"
        content="개발자 조찬영에 대해 소개하는 페이지 입니다. 제가 개발에 대해 어떤 가치관을 가지고 있고, 어떤 식으로 문제를 해결하며, 사용할 수 있는 기술들을 나열해 놓았습니다."
      />
      <meta name="og:title" content="소개 :: chanyeong" />
      <meta
        name="og:description"
        content="개발자 조찬영에 대해 소개하는 페이지 입니다. 제가 개발에 대해 어떤 가치관을 가지고 있고, 어떤 식으로 문제를 해결하며, 사용할 수 있는 기술들을 나열해 놓았습니다."
      />
    </Helmet>
    <PageContainer>
      <AboutWrapper>
        <PagePath data={path} page="about" />
        <Text content="안녕하세요! 저는 프론트엔드 개발자를 꿈꾸고 있는 조찬영입니다." />
        <Text content="Values" weight={700} size={TITLE} />
        <Text content="제가 생각하는 개발의 중요한 포인트 세 가지는 다음과 같습니다." />
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
            content="현대의 소프트웨어는 크고 복잡해졌습니다. 때문에 개발자들과의 협업과정은 선택이 아니라 필수라고 생각됩니다. 협업을 진행하며 가장 중요한 가치는 소통 이라고 생각하기 때문에 소통하기위해 노력 하겠습니다."
          />
        </AboutItemWrapper>
        <Text content="Work Process" weight={700} size={TITLE} />
        <WorkProcessWrapper>
          <WorkProcessItem engName="planning" korName="기획" />
          <WorkProcessItem engName="design" korName="디자인" />
          <WorkProcessItem engName="development" korName="개발" />
          <WorkProcessItem engName="debugging" korName="테스팅" />
          <WorkProcessItem engName="deploy" korName="배포" />
        </WorkProcessWrapper>
        <div>
          {userInfo?.isLoggedIn.userName && <Button onClick={onClickAddSkill} name="스킬 추가" align="right" />}
          <Text content="Skill Stack" weight={700} size={TITLE} />
        </div>
        <Text content="Front-End" weight={700} />
        <SkillListWrapper>
          {frontSkills?.map((v) => (
            <AboutSkill
              key={`about_front_skill${v.id}`}
              data={v}
              onClick={userInfo?.isLoggedIn.userName && onClickEditSkill}
            />
          ))}
        </SkillListWrapper>
        <Text content="Back-End" weight={700} />
        <SkillListWrapper>
          {backSkills?.map((v) => (
            <AboutSkill
              key={`about_back_skill${v.id}`}
              data={v}
              onClick={userInfo?.isLoggedIn.userName && onClickEditSkill}
            />
          ))}
        </SkillListWrapper>
        <Text content="DevOps" weight={700} />
        <SkillListWrapper>
          {devopsSkills?.map((v) => (
            <AboutSkill
              key={`about_devops_skill${v.id}`}
              data={v}
              onClick={userInfo?.isLoggedIn.userName && onClickEditSkill}
            />
          ))}
        </SkillListWrapper>
      </AboutWrapper>
    </PageContainer>
  </>
);

export default AboutPresenter;
