import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../style/index.css'

import Scrollspy from 'react-scrollspy'
import Fade from 'react-reveal/Fade';
import {FaLinkedin,FaGithubSquare,FaEnvelope } from 'react-icons/fa';
import { IconContext } from "react-icons";

import ALogo from "../images/a4_logo_rgb.jpg";
import NLogo from "../images/nyu.png";
import KLogo from "../images/kiit_logo.png";
import A2Logo from "../images/acc.png";
import DLogo from "../images/d.png";

import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isPotrait = useMediaQuery({ orientation: 'portrait' })
  return isDesktop && !isPotrait ? children : null
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{backgroundColor:'white',color:'black'}} id="head-links">
          
          <div style={{position:'sticky',zIndex:'100',left:'90%', top : '10%',color:'white',padding:'1rem',textAlign:'center',width:'14%',marginLeft:'1%'}}>
            <IconContext.Provider value={{size:'2em', className: "contact-icons-bottom"}} >
              <Fade right big cascade >
                <div>
                  <a href="https://www.linkedin.com/in/satyajeetmaharana/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>&nbsp;&nbsp;
                  <a href="https://github.com/satyajeetmaharana" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>&nbsp;&nbsp;
                  <a href="mailto:satyajeet@nyu.edu" target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
                </div>
              </Fade>
            </IconContext.Provider>
          </div>
        <Desktop>
          <div style={{position:'sticky',zIndex:'100',top:'30%',backgroundColor:'black',color:'white',padding:'1%',textAlign:'center',width:'14%',minWidth:'13%',marginLeft:'1%'}}>
            <Scrollspy items={ ['AboutSec', 'Skills', 'Education','Experience','Projects'] } currentClassName="is-current" componentTag="div">
                <div className="link-to-section"><a href="#AboutSec">About<br/></a></div>
                <div className="link-to-section"><a href="#Skills">Skills<br/></a></div>
                <div className="link-to-section"><a href="#Education">Education<br/></a></div>
                <div className="link-to-section"><a href="#Experience">Experience<br/></a></div>
                <div className="link-to-section"><a href="#Projects">Projects<br/></a></div>
            </Scrollspy>
          </div>
        </Desktop>
        <div style={{display:'flex',paddingLeft:'20%',paddingRight:'20%',marginTop:'-100px'}} >
          <div style={{flex:'1'}}>
            <h1 style={{color:'#35db8b',textAlign:'center'}} id="AboutSec">About</h1>
            <br/>
            <p style={{textAlign:'center'}} >
              Satyajeet is an engineer, focused on Software Development. 
            </p>
          </div>
        </div>
        <div style={{height:'4rem'}}></div>
        <div style={{display:'flex',paddingLeft:'20%',paddingRight:'20%'}} >
          <div style={{flex:'1'}}>
            <h1 style={{color:'#35db8b',textAlign:'center'}} id="Skills">Skills</h1>
            <br/>
            <div style={{display:'flex',textAlign:'center',flexDirection:'column'}}>
              <div style={{flex:'1'}}>
                <div style={{display:'flex'}}>
                  <div style={{flex:'1'}}>
                  <b>Programming</b>
                  </div>
                  <div style={{flex:'1'}}>
                    Java, Apex, Python, JavaScript, C++, Shell scripting, HTML, CSS
                  </div>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex'}}>
                  <div style={{flex:'1'}}>
                  <b>Databases</b>
                  </div>
                  <div style={{flex:'1'}}>
                  SQL, Hive, MongoDB
                  </div>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex'}}>
                  <div style={{flex:'1'}}>
                  <b>Frameworks & Technology</b>
                  </div>
                  <div style={{flex:'1'}}>
                  scikit-learn, PyTorch, Apache Spark, Hadoop, React.js
                  </div>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex'}}>
                  <div style={{flex:'1'}}>
                  <b>Tools</b>
                  </div>
                  <div style={{flex:'1'}}>
                    Jenkins, Git, Bamboo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:'4rem'}}></div>
        
        <div style={{paddingLeft:'20%',paddingRight:'20%'}} id="Education">
          <h1 style={{color:'#35db8b',textAlign:'center'}} >Education</h1>
          <div>
            {/*
            * 
            * 
            * *************************** NYU SECTION ****************************
            * 
            * 
            */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={NLogo} className='logos'alt="New York University"/></div>
                    <div><b>New York University</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center',color:'gray'}}>
                  <b>Master of Science in Computer Science</b>
                  <div>Sep 2018-May 2020</div>
                </div> 
                <br/>
                <div style={{textAlign: 'center'}}>
                  <p><b>Relevant Coursework:</b>&nbsp;Database Systems, Fundamental Algorithms, Operating Systems, Data Science for Business Analytics, Big Data Application Development</p>
                  <p style={{textAlign:'center',fontSize:'110%'}}><b>GPA:</b>&nbsp;3.815/4</p>
                </div>
              </div>
            </div>
            <br/>
            {/*
            * 
            * 
            * *************************** KIIT SECTION ****************************
            * 
            * 
            */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={KLogo} className='logos' alt="KIIT University"/></div>
                    <div><b>KIIT University</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center',color:'gray'}}>
                  <b>Bachelor of Technology in Electronics & Telecommunication</b>
                  <div>Sep 2018-May 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:'4rem'}}></div>
        <div style={{paddingLeft:'20%',paddingRight:'20%'}} id="Experience">
          <h1 style={{color:'#35db8b',textAlign:'center'}} >Experience</h1>
          <div>
            {/*
             * 
             * 
             * *************************** ALTICE EXPERIENCE ****************************
             * 
             * 
             */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={ALogo} className='logos' alt="Altice USA"/></div>
                    <div><b>Altice USA</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center',color:'gray'}}>
                  <b>Software Intern</b>
                  <div>Jun 2019-Aug 2019</div>
                </div> 
                <p style={{textAlign: 'justify'}}>
                  <ul>
                    <li>Revamped the sales and services platform by developing scalable and responsive business applications using Java which led to streamlined business process and improved user experience</li>
                  </ul>
                </p>
              </div>
            </div>
            <br/>
            {/*
             * 
             * 
             * *************************** DELOITTE EXPERIENCE ****************************
             * 
             * 
             */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={DLogo} className='logos' alt="Deloitte"/></div>
                    <div><b>Deloitte</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center',color:'gray'}}>
                  <b>Software Engineer</b>
                  <div>Aug 2017-Aug 2018</div>
                </div> 
                <p style={{textAlign: 'justify'}}>
                  <ul>
                    <li>Developed a "Next Best Opportunity and Lead recommender system" based on customer preferences, prospect engagement, and competitor involvement, which helped Sales Team make data-driven decisions</li>
                    <li>Optimized code and re-engineered existing system architecture; reduced costs for future enhancements and maintenance by 30%</li>
                    <li>Implemented CI/CD of code using Bitbucket & Bamboo; reduced development time by 20% and late stage-QA defects by 15%</li>
                    <li>Ideated and built a Gamification app using JavaScript & Lightning Components for the Salesforce iOS app; notably increased internal user engagement</li>
                  </ul>
                </p>
              </div>
            </div>
            <br/>
            {/*
             * 
             * 
             * *************************** ACCENTURE EXPERIENCE ****************************
             * 
             * 
             */}
            <div>
              <div style={{textAlign:'center'}} >
                <p style={{margin: 'auto',textAlign:'center',fontSize:'130%'}}>
                    <div><img src={A2Logo} className='logos' alt="Accenture"/></div>
                    <div><b>Accenture</b></div>
                </p>
              </div>
              <div>
                <div style={{textAlign:'center',color:'gray'}}>
                  <b>Software Engineer</b>
                  <div>Jul 2015-Aug 2017</div>
                </div> 
                <p style={{textAlign: 'justify'}}>
                  <ul>
                    <li>Led the customer services team to develop case routing algorithms for classification of new service requests; increased service requests closer rate by ~20%</li>
                    <li>Analyzed and developed a prototype for a chatbot which simplified querying and executing routine tasks on customer service requests</li>
                    <li>Implemented end-to-end deployments by coordinating effectively with various cross-functional teams from multiple locations to bring critical client projects to successful closure</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:'4rem'}}></div>
        <div style={{paddingLeft:'20%',paddingRight:'20%'}} id="Projects">
          <h1 style={{color:'#35db8b',textAlign:'center'}}>Projects</h1>
          <div>
              <p style={{textAlign: 'center'}}><b>Hand Movement Detection & Scene Prediction in EgoHands Video Dataset</b></p>
              <p style={{textAlign: 'justify'}}>
                The goal of this project is to detect hands in the videos and predict the scene based on the hand actions using Deep Learning techniques.
                <br/>
                Architected and trained two recurrent convolutional neural networks:
                <br/>
                A network to detect hands using the MaskRCNN architecture: Avg. Precision: 0.7472 Avg. Recall: 0.6184 (IOU metrics)
                <br/>
                A ResNet50 network to classify each video into one of the 4 scenes (playing  Puzzle, Jenga, Cards, Chess): Accuracy: 85.40%<br/>
              </p>
            </div>
            <div>
              <p style={{textAlign: 'center'}}><b>Community detection in networks with fuzzy boundaries</b></p>
              <p style={{textAlign: 'justify'}}>In this paper, we presented simple yet effective ideas to sharpen the fuzzy boundaries between the communities in networks and proposed two algorithms for community detection known as SHCD and SRSTCD. We have used the concept of social harmony, space reduction and space transformation, and complement network for a given network in identify the fuzzy boundaries between the communities more accurately. Presented at the ADM-MLDM Conference 2019, New York.</p>
            </div>
            <div>
              <p style={{textAlign: 'center'}}><b>Hard Drive Failure Prediction using Machine Learning Methods</b></p>
              <p style={{textAlign: 'justify'}}>The goal of our project is to identify hard disks which are at a risk of failing in a future time period. Our Machine learning model is trained on data obtained from several hard drive manufacturers, a publicly available dataset from Backblaze. Even with a highly skewed dataset, a base rate of 0.39%, we achieved recall of 0.89, precision of 0.85 and AUC ROC of 0.87 using AdaBoosted Decision Tree Classifier.</p>
            </div>
            <div>
              <p style={{textAlign: 'center'}}><b>Flood Prediction in the U.S. using Machine Learning Methods</b></p>
              <p style={{textAlign: 'justify'}}>The goal of our project is to identify the flood-prone areas with probabilities of flooding in counties in a future date. We used Hadoop and Apache Spark MLlib package to train different ML models and used Grid Search algorithm for hyperparameter tuning. Out of all the different models, the Random Forrest Regressor performed the best with accuracy of 80%, precision of 0.85, recall of 0.80 and F1 score of 0.82.</p>
            </div>
            <div>
              <p style={{textAlign: 'center'}}><b>Programming Languages Trend and Sentiment Analysis</b></p>
              <p style={{textAlign: 'justify'}}>Scraped StackOverflow and StackExchange data from 2010 through 2017 and performed data analysis on raw posts and comments data to gain insights about the upcoming programming languages and the overall satisfaction of the developer communities by the Sentiment analysis of the comments using NLTK, Pandas, NumPy, Matplotlib, Seaborn. We mitigated the challenge of having more than 100 GB of raw textual data by pre-processing our dataset on HDFS.</p>
            </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
