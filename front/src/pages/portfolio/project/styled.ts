import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  margin-bottom: 80px;
`;

export const ProjectHeader = styled.div`
  margin-bottom: 20px;
  & > h1 {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 10px;
    color: ${(props) => props.theme.PRIMARY_COLOR};

    @media (max-width: ${({ theme }) => theme.BP.PC}) {
      font-size: 34px;
    }
    @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
      font-size: 28px;
    }
    @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
      font-size: 20px;
    }
  }
  & > div {
    margin-bottom: 10px;
  }
`;

export const SkillsWrapper = styled.div`
  & > h3 {
    font-size: 20px;
  }

  & > span {
    margin-right: 20px;
  }
`;
