import React from 'react';
import ReadMoreReact from 'read-more-react';
import ReactTextMoreLess from 'react-text-more-less';
import Audio from '../../images/mov_bbb.mp4';
import Layout from '../../layouts/index';
import './index.css'
class About extends React.Component  {
    state = {
        collapsed: true,
    };
    render() {
        const { collapsed } = this.state;
      return (
           <div className="bg-about">
              <div className="content-about">
                 <div className="text-about">
                    <div className="container">
                       <div className="row">
                        <div className="col-lg-6">
                            <h1>What are we</h1>
                            <br />
                            <p className="whatAreWe1">Centane Youth Development is a non profit organisation formed in April 2018 focusing on career development, youth entrepreneurship, research,
                               public private partnerships initiatives,youth development and job creation.</p>
                        </div>
                        <div className="col-lg-6">
                            <h1>Our vision</h1>
                            <br />
                            <p className="vision1"> Our vision is to be the leading youth empowerment organization in Africa through career development and youth entrepreneurship.
                            </p>
                        </div>
                        </div>
                        <br />
                        <hr/>
                        <div className="row">    
                        <div className="col-lg-12">
                            <h1 className="objectives">Objectives</h1>
                            <br />
                            <p className="firstpara1">Through career development, we aim at bringing a new breed of leaders – who are visionary, hungry, committed and passionate about their communities. A committed career orientated youth has ability to end social and economic injustice in their surroundings.
                                Career development at Centane is vested at senior secondary level as well as at tertiary level through Youth Rising Project.
                            </p>
                            <p> 
                            </p>
                            <p>    
                            <ReactTextMoreLess
                                collapsed={collapsed}
                                text=" As studies have shown internationally, solutions in creating ongoing job opportunities rests in the small business sector.
                                The objectives of CYD is to steer youth into entrepreneurship, becoming independent and job creators for a working South Africa.
                                Centane Youth Development Association has a special innovative commitment in making Vision 2030 a reality through our Quality Circles Forum connecting youth, private and public stakeholders on National Development Plan makers.
                                CYD aims at becoming a trusted entity through research on youth developmental initiatives.
                                Objectives on engaging through public and private initiatives are to bring closer leaders in both sectors and creating a positive, innovative working relationships in understanding current and upcoming opportunities
                    
                                Through youth development, we aim at encouraging the youth to take part in various developmental initiatives thereby empowering themselves, bringing back their dignity, confidence, mission, vision, accountability and responsibility.
                                The youth is disillusioned; they no longer participate in initiatives, have lost confidence and are very different compared to their role in the past years on political struggle.  The organization is set to invite role models to take part, encourage and act as mentors and motivators to the youth.  Our long term objective is to ensure that youth understands the positive benefits of organizational involvement. The above will be achieved through partnerships with other stakeholders in the private and public sector.
                            
                                To open job opportunities for the youth and other members of the community.
                        
                                Through our networks and strategies, we aim at creating ongoing job opportunities for youth not only being employed  but by also becoming self-sustainable
                        
                                Youth Rising Leadership Project focuses on coaching and capacity building of Grade 10 – 12 Learners to fully understand their potential whilst getting fundraising knowledge to boost their careers at institutions of higher learning. The National Development Plan research depicts a bad image of learners dropping out prior to them finishing secondary school and as well as not contributing to the South African economy hence a need for a focussed new breed of learners on their careers. Learners with no fundraising knowledge get trapped and are unable to enter tertiary institutions.
                        
                                Learners with no coaching do not find purpose in life and become immoral and endanger the society. It focuses on creating future leaders with vision and innovation from secondary to tertiary level with unending mission and vision.
                            
                                In just 9 months after launch, we have managed to assist 24 matriculants from disadvantaged backgrounds to register at own institutions of higher learning in Eastern Cape and are now aiming at assisting 100 next year.
                                "
                                    lessHeight={70}
                                    showMoreText="Read more"
                                    showMoreElement={(
                                       <span>
                                            <span className="show-more-text">... Read more</span>
                                        </span>
                                    )}
                                    showLessElement={(
                                        <span className="show-more-text">Read less</span>
                                    )}
                                    onClick={() => {this.setState({ collapsed: !collapsed })}}
                            />
                            </p>
                            <h6><strong>Listen to audio summary:</strong></h6>
                            <audio controls><source src={Audio} type="audio/mp3"/></audio>
                        </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        )
    }
}
    export default About;