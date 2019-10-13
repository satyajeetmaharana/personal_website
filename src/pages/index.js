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
    <div style={{backgroundColor:'black',color:'white'}}>
        <div style={{position:'sticky',zIndex:'100',top:'0',backgroundColor:'black',color:'white',padding:'1rem',textAlign:'center'}}>
          <Scrollspy items={ ['AboutSec', 'Skills', 'Education','Experience','Projects'] } currentClassName="is-current" componentTag="a" offset="10">
              <a href="#AboutSec" className="link-to-section">About</a>
              <a href="#Skills" className="link-to-section">Skills</a>
              <a href="#Education" className="link-to-section">Education</a>
              <a href="#Experience" className="link-to-section">Experience</a>
              <a href="#Projects" className="link-to-section">Projects</a>
        </Scrollspy>
      </div>
        <div style={{display:'flex'}} id="AboutSec">
          <div style={{flex:'1',padding:'5rem'}}>
            <h1 style={{color:'#35db8b',textAlign:'center'}}>About</h1>
            <br/>
            <p style={{textAlign:'center'}}>
              Satyajeet is an engineer, focused on Software Development. 
            </p>
          </div>
        </div>
        <div style={{display:'flex'}} id="Skills">
          <div style={{flex:'1',padding:'5rem'}}>
            <h1 style={{color:'#35db8b',textAlign:'center'}}>Skills</h1>
            <br/>
            <div style={{display:'flex',textAlign:'center'}}>
              <div style={{flex:'1'}}>
                <div><b>Programming</b></div>
                <div>
                  Java<br/>
                  Apex<br/>
                  Python<br/>
                  JavaScript<br/>
                  C++<br/>
                  Shell scripting<br/>
                  ANT<br/>
                  HTML/CSS<br/>
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
                  Pandas<br/>
                  NumPy<br/>
                  Matplotlib<br/>
                  scikit-learn<br/>
                  Seaborn<br/>
                  Apache Spark<br/>
                  Hadoop<br/>
                  Node.js<br/>
                  React.js<br/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding:'5rem'}} id="Education">
          <h1 style={{color:'#35db8b',textAlign:'center'}}>Education</h1>
          <br/>
          <div style={{color:'white'}}>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center',}}>May 2020</p>
              </div>
              <div style={{flex:'1'}}>
                  <p><b>New York University</b><br/>Master of Science in Computer Science</p>
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center',}}>May 2015</p>
              </div>
              <div style={{flex:'1'}}>
                <p><b>KIIT University</b><br/>Bachelor of Technology in Electronics & Telecommunication</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding:'5rem'}} id="Experience">
          <h1 style={{color:'#35db8b',textAlign:'center'}}>Experience</h1>
          <br/>
          <div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center'}}>Jun 2019-Aug 2019</p>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Altice USA</b><br/>Software Intern</p>
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center'}}>Aug 2017-Aug 2018</p>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Deloitte</b><br/>Software Engineer</p>
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}>
                  <p style={{margin: 'auto',textAlign:'center'}}>Jul 2015-Aug 2017</p>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Accenture</b><br/>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{padding:'5rem'}} id="Projects">
          <h1 style={{color:'#35db8b',textAlign:'center'}}>Projects</h1>
          <br/>
          <div>
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
    </div>
  </Layout>
)

export default IndexPage
