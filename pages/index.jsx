import Head from 'next/head';
import Card from '../components/Card';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText from '../components/MovingText';
import SectionHeading from '../components/SectionHeading';
import PortfolioSlider from '../components/Slider/PortfolioSlider';
import PostSlider from '../components/Slider/PostSlider';
import TeamSlider from '../components/Slider/TeamSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';
import ServiceList from '../components/ServiceList';

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Facebook',
      links: 'https://www.facebook.com/blazonweb/',
    },
    {
      name: 'Instagram',
      links: 'https://www.instagram.com/blazonweb.in/',
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: ' Happy Clients',
      factNumber: '20K',
    },
    {
      title: 'Completed Campaigns',
      factNumber: '4K',
    },
    {
      title: 'On-Time Delivery',
      factNumber: '100%',
    },
    {
      title: 'Live Websites',
      factNumber: '70',
    },
  ];

  return (
    <>
      <Head>
        <title>Blazon Web Consgitultants</title>
        <meta name="description" content="Innovative digital agency empowering business owners to enhance their online presence and thrive in the digital realm." />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Layout>
        {/* Start Hero Section */}
        <Hero
          title="Digital Transformation<br>
          We Made Simple "
          subtitle="innovative digital agency empowering business owners to
          enhance their online presence and thrive in the digital realm."
          btnText="Get Free Quote"
          btnLink="/contact"
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hero-bg-final.gif"
        />
        {/* End Hero Section */}

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title="Driving Success"
            subtitle="At Blazon Web, we measure our success not only in terms of creativity
            and innovation but also through the tangible results we achieve for our clients."
            data={funfaceData}
          />
        </div>
        {/* End FunFact Section */}

        {/* Start Service Section */}
       
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Transforming Ideas into Digital Success"
                  subtitle="What Can We Do"
                  btnText="See All Services"
                  btnLink="/service"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Web Development"
                      link="/service/service-details"
                      src="/images/Web_development.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Digital Marketing"
                      link="/service/service-details"
                      src="/images/digital_marketing.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Branding"
                      link="/service/service-details"
                      src="/images/branding.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Digital consulting"
                      link="/service/service-details"
                      src="/images/service_4.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}

        {/* Start Portfolio Section */}
        <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title="Explore Our Portfolio"
              subtitle="Latest Projects"
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider />
        </Div>
        {/* End Portfolio Section */}

        {/* Start Awards Section */}
        {/* <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_2">
          <Div className="cs-shape_2">
            <Div />
          </Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="We get multiple awards"
                  subtitle="Our Awards"
                  variant="cs-style1"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <TimelineSlider />
              </Div>
            </Div>
          </Div>
        </Div> */}
        {/* End Awards Section */}

        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Our agile process is ability to adapt and respond to change. Agile
            organizations view change as an opportunity, not a threat.
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
            bgUrl="/images/video_bg.jpeg"
          />
        </Div>
        {/* End Video Block Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent publication"
                  subtitle="Our Blog"
                  btnText="View More Blog"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="Our reputed world wide partners" />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
