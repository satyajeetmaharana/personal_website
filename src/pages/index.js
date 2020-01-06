import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../style/index.css'

import Scrollspy from 'react-scrollspy'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{backgroundColor:'white',color:'black'}} id="head-links">
        <div style={{position:'sticky',zIndex:'100',top:'0',backgroundColor:'black',color:'white',padding:'1rem',textAlign:'center'}}>
          <Scrollspy items={ ['AboutSec', 'Skills', 'Education','Experience','Projects'] } currentClassName="is-current" componentTag="a" offset="6">
              <a href="#AboutSec" className="link-to-section">About</a>
              <a href="#Skills" className="link-to-section">Skills</a>
              <a href="#Education" className="link-to-section">Education</a>
              <a href="#Experience" className="link-to-section">Experience</a>
              <a href="#Projects" className="link-to-section">Projects</a>
        </Scrollspy>
      </div>
        <div style={{display:'flex'}} id="AboutSec">
          <div style={{flex:'1'}}>
            <h1 style={{color:'#35db8b',textAlign:'center'}} >About</h1>
            <br/>
            <p style={{textAlign:'center'}} >
              Satyajeet is an engineer, focused on Software Development. 
            </p>
          </div>
        </div>
        <div style={{display:'flex'}} id="Skills">
          <div style={{flex:'1'}}>
            <h1 style={{color:'#35db8b',textAlign:'center'}}>Skills</h1>
            <br/>
            <div style={{display:'flex',textAlign:'center'}}>
              <div style={{flex:'1'}}>
                <div><b>Programming</b></div>
                <div>
                  Java<br/>Apex<br/>Python<br/>JavaScript<br/>C++<br/>Shell scripting<br/>HTML<br/>CSS<br/>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <div><b>Databases</b></div>
                <div>
                  SQL<br/>
                  Hive<br/>
                  MongoDB<br/>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <div><b>Frameworks & Technology</b></div>
                <div>
                  scikit-learn<br/>PyTorch<br/>Apache Spark<br/>Hadoop<br/>React.js<br/>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <div><b>Tools</b></div>
                <div>
                  Jenkins<br/>Git<br/>Bamboo<br/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  id="Education">
          <h1 style={{color:'#35db8b',textAlign:'center'}}>Education</h1>
          <br/>
          <div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center',}}>May 2020</p>
              </div>
              <div style={{flex:'1'}}>
                  <p><b>New York University</b><br/>Master of Science in Computer Science</p>
                  <p><b>Relevant Coursework:</b>&nbsp;Database Systems, Fundamental Algorithms, Operating Systems, Data Science for Business Analytics, Big Data Application Development</p>
                  <p><b>GPA:</b>&nbsp;3.815/4</p>
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center',}}>May 2015</p>
              </div>
              <div style={{flex:'1'}}>
                <p><b>KIIT University</b><br/>Bachelor of Technology in Electronics & Telecommunication</p>
                <p><b>GPA:</b>&nbsp;7.86/10</p>
              </div>
            </div>
          </div>
        </div>
        <div  id="Experience">
          <h1 style={{color:'#35db8b',textAlign:'center'}}>Experience</h1>
          <br/>
          <div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center'}}>Jun 2019-Aug 2019</p>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Altice USA</b><br/>Software Intern</p>
                <p style={{textAlign: 'justify'}}>
                  <ul>
                    <li>Revamped the sales and services platform by developing scalable and responsive business applications using Java which led to streamlined business process and improved user experience</li>
                  </ul>
                </p>
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center'}}>Aug 2017-Aug 2018</p>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Deloitte</b><br/>Software Engineer</p>
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
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center'}}>Jul 2015-Aug 2017</p>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Accenture</b><br/>Software Engineer</p>
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
        <div id="Projects">
          <h1 style={{color:'#35db8b',textAlign:'center'}}>Projects</h1>
          <div>
              <b>
                Hand Movement Detection & Scene Prediction in EgoHands Video Dataset
              </b>
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
              <b>
                Community detection in networks with fuzzy boundaries
              </b>
              <p style={{textAlign: 'justify'}}>In this paper, we presented simple yet effective ideas to sharpen the fuzzy boundaries between the communities in networks and proposed two algorithms for community detection known as SHCD and SRSTCD. We have used the concept of social harmony, space reduction and space transformation, and complement network for a given network in identify the fuzzy boundaries between the communities more accurately. Presented at the ADM-MLDM Conference 2019, New York.</p>
            </div>
            <div>
              <b>Hard Drive Failure Prediction using Machine Learning Methods</b>
              <p style={{textAlign: 'justify'}}>The goal of our project is to identify hard disks which are at a risk of failing in a future time period. Our Machine learning model is trained on data obtained from several hard drive manufacturers, a publicly available dataset from Backblaze. Even with a highly skewed dataset, a base rate of 0.39%, we achieved recall of 0.89, precision of 0.85 and AUC ROC of 0.87 using AdaBoosted Decision Tree Classifier.</p>
            </div>
            <div>
              <b>Flood Prediction in the U.S. using Machine Learning Methods</b>
              <p style={{textAlign: 'justify'}}>The goal of our project is to identify the flood-prone areas with probabilities of flooding in counties in a future date. We used Hadoop and Apache Spark MLlib package to train different ML models and used Grid Search algorithm for hyperparameter tuning. Out of all the different models, the Random Forrest Regressor performed the best with accuracy of 80%, precision of 0.85, recall of 0.80 and F1 score of 0.82.</p>
            </div>
            <div>
              <b>Programming Languages Trend and Sentiment Analysis</b>
              <p style={{textAlign: 'justify'}}>Scraped StackOverflow and StackExchange data from 2010 through 2017 and performed data analysis on raw posts and comments data to gain insights about the upcoming programming languages and the overall satisfaction of the developer communities by the Sentiment analysis of the comments using NLTK, Pandas, NumPy, Matplotlib, Seaborn. We mitigated the challenge of having more than 100 GB of raw textual data by pre-processing our dataset on HDFS.</p>
            </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
