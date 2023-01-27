import styled from 'styled-components';
import Card from '../../components/Card/Card';
import sigpwnylogo from '../../stories/assets/sigpwnylogo.png';
import sigchilogo from '../../stories/assets/sigchilogo.png';
import gamebuildlogo from '../../stories/assets/gamebuildlogo.png';
import sigaidalogo from '../../stories/assets/sigaidalogo.png';
import siggraphlogo from '../../stories/assets/siggraphlogo.png';
import icpclogo from '../../stories/assets/icpclogo.png';
import sigmobilelogo from '../../stories/assets/sigmobilelogo.png';
import sigmusiclogo from '../../stories/assets/sigmusiclogo.png';
import gluglogo from '../../stories/assets/gluglogo.png';
import signll_logo from '../../stories/assets/signll_logo.png';
import sigmalogo from '../../stories/assets/sigmalogo.png';
import quiuclogo from '../../stories/assets/quiuclogo.png';
import Content from '../../components/Content/Content';
import Button from '../../components/Button/Button';
import sigecomlogo from '../../stories/assets/sigecomlogo.png';
import sigplanlogo from '../../stories/assets/sigplanlogo.png';
import sigarchlogo from '../../stories/assets/sigarchlogo.png';
import sigpolicylogo from '../../stories/assets/sigpolicylogo.png';

export const Grid = styled.div`
  display: grid;
  margin-left: -20px;
  margin-top: -20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  grid-gap: 20px;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  overflow-x: auto;
  width: 100%;
  padding-right: 20px;
  margin-right: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const AllSigs = styled((props) => (
  <Button as="a" to large variant="neutral" {...props} />
))`
  text-decoration: none;
  margin-top: 15px;
  font-size: ${(props) => props.theme.fontSizes.h3}px;
`;
const Sigscard = (props: any) => {
  return (
    <Content as="div" style={{ marginBottom: 60 }}>
      <Grid>
        <Card
          title="SIGPwny"
          description="Learn cybersecurity from the ground up, play in competitions, 
          and do research. Beginners welcome!"
          link1="https://sigpwny.com/"
          link2="https://sigpwny.com/discord"
          Imagesrc={sigpwnylogo}
          linktext1="Website"
          linktext2="Discord"
        />
        <Card
          title="SIGAIDA"
          description="We are the premier data science
          organization at UIUC, inspiring students to reshape their perspective on data."
          link1="https://aida.acm.illinois.edu/"
          link2="https://discord.gg/QBj8rh9sM8"
          Imagesrc={sigaidalogo}
          linktext1="Website"
          linktext2="Discord"
        />
        <Card
          title="SIGMobile"
          description="A mobile development club with Android tutorials, iOS tutorials,
          guest lectures, and group projects."
          link1="https://apoorvaditya.notion.site/SIGMobile-dc12c5f971aa43ffbd5435d8fcae91fe"
          link2="https://discord.gg/af6SvFWGSc"
          Imagesrc={sigmobilelogo}
          linktext1="Notion"
          linktext2="Discord"
        />
        <Card
          title="GameBuilders"
          description="Anything and everything related to game development
          and design. All skill levels and abilities are welcome."
          link1="https://gamebuilders.acm.illinois.edu/"
          link2="https://discordapp.com/invite/2rND6FT"
          Imagesrc={gamebuildlogo}
          linktext1="Website"
          linktext2="Discord"
        />
        <Card
          title="SIGGRAPH"
          description="Learn computer graphics in guided projects on 3D renderings,
          animations, physics simulations, and more."
          link1="https://siggraph.acm.illinois.edu/#/"
          link2="https://discord.com/invite/a5U333fNMX"
          Imagesrc={siggraphlogo}
          linktext1="Website"
          linktext2="Discord"
        />
        <Card
          title="ICPC"
          description="Polish coding and problem solving skills to prepare
          for competitions/interviews at Illinois Programming League."
          link1="http://icpc.cs.illinois.edu/"
          link2="https://campuswire.com/p/GACF2E8B2"
          Imagesrc={icpclogo}
          linktext1="Website"
          linktext2="Campuswire (code 4080)"
        />
        <Card
          title="SIGCHI"
          description="Learn about human-computer interaction in research,
          projects, and workshops while meeting new people."
          link1="https://sigchi.acm.illinois.edu/"
          link2="https://discord.gg/XRShsPCAQ3"
          Imagesrc={sigchilogo}
          linktext1="Website"
          linktext2="Discord"
        />
        <Card
          title="GLUG"
          description="Immerse yourself in Linux-based operating systems and the 
          wider open source world."
          link1="http://lug.acm.illinois.edu/"
          link2="https://discord.gg/sWD3zxPyc2"
          Imagesrc={gluglogo}
          linktext1="Website"
          linktext2="Discord"
        />
        <Card
          title="SIGMusic"
          description="A project-based SIG with presentations 
          focused on audio synthesis, algorithmic composition, audio plugins, and more."
          link1="http://sigmusic.acm.illinois.edu/"
          link2="https://discord.gg/ug9NdWzD"
          Imagesrc={sigmusiclogo}
          linktext1="Website"
          linktext2="Discord"
        />
        <Card
          title="SIGQuantum"
          description="Our SIG provides inclusive environment for 
          students to discover and disrupt the Quantum Computing community."
          link1="/#sighighlight"
          link2="https://discord.gg/PmaXeHPaFs"
          Imagesrc={quiuclogo}
          linktext1="—"
          linktext2="Discord"
        />
        <Card
          title="SIGma"
          description="The place to learn about math and algorithms in CS. 
          Open to all regardless of mathematical background."
          link1="https://cstheory.org"
          link2="https://discord.gg/Sxf3h3pBbv"
          Imagesrc={sigmalogo}
          linktext1="Website"
          linktext2="Discord"
        />
        <Card
          title="SIGNLL"
          description="Natural language processing theory: projects, workshops, 
          and learning techniques at this SIG."
          link1="/#sighighlight"
          link2="https://discord.gg/wwYeewYkCG"
          Imagesrc={signll_logo}
          linktext1="—"
          linktext2="Discord"
        />
        <Card
          title="SIGecom"
          description="Learn about the intersection of economics and computation. Open to all regardless of background."
          link1="/#sighighlight"
          link2="https://discord.gg/usSzJqVKbd"
          Imagesrc={sigecomlogo}
          linktext1="—"
          linktext2="Discord"
        />
        <Card
          title="SIGPLAN"
          description="Learn about the theory behind programming languages and type systems, and then make projects!"
          link1="/#sighighlight"
          link2="https://discord.gg/t4TmDRDf9c"
          Imagesrc={sigplanlogo}
          linktext1="—"
          linktext2="Discord"
        />
        <Card
          title="SIGPolicy"
          description="Discuss and understand software policy, ethics, law, and current events through a technological lens."
          link1="/#sighighlight"
          link2="https://discord.gg/gKjMH54YBF"
          Imagesrc={sigpolicylogo}
          linktext1="—"
          linktext2="Discord"
        />
        <Card
          title="SIGARCH"
          description="Dedicated to teaching and exploring computer architecture, hardware security, and more."
          link1="/#sighighlight"
          link2="https://discord.gg/Mx8R389hWz"
          Imagesrc={sigarchlogo}
          linktext1="—"
          linktext2="Discord"
        />
      </Grid>
      <LinkContainer>{/*<AllSigs>See All SIGs »</AllSigs>*/}</LinkContainer>
    </Content>
  );
};

export default Sigscard;
