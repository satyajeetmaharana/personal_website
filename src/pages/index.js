import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
        <div style={{display:'flex'}}>
          <div style={{flex:'1'}}>
            <h1>About</h1>
            <p>
              Satyajeet is an engineer, focused on Software Development. 
            </p>
            
          </div>
          <div style={{flex:'1'}}>
            <h1>Skills</h1>
            <p>
              <ul style={{listStyle:'none'}}>
                <li>
                  <div>
                    HTML
                  </div>
                </li>
                <li>
                  <div>
                    Salesforce
                  </div>
                </li>
                <li>
                  <div>
                    Java
                  </div>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div>
          <h1>Education</h1>
          <div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex',backgroundColor:'black',color:'white',borderRadius:'100%',width:'5vw',height:'5vw',textAlign:'center'}}>
                  <p style={{margin: 'auto',textAlign:'center',}}>May 2020</p>
                </div>
              </div>
              <div style={{flex:'1'}}>
                  <p><b>New York University</b><br/>Master of Science in Computer Science</p>
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex',backgroundColor:'black',color:'white',borderRadius:'100%',width:'5vw',height:'5vw',textAlign:'center'}}>
                  <p style={{margin: 'auto',textAlign:'center',}}>May 2015</p>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <p><b>KIIT University</b><br/>Bachelor of Technology in Electronics & Telecommunication</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Experience</h1>
          <div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex',backgroundColor:'black',color:'white',borderRadius:'100%',width:'5vw',height:'5vw',textAlign:'center'}}>
                  <p style={{margin: 'auto',textAlign:'center',fontSize:'14px'}}>Jun 2019-Present</p>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Altice USA</b><br/>Software Intern</p>
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>
                <div style={{display:'flex',backgroundColor:'black',color:'white',borderRadius:'100%',width:'5vw',height:'5vw',textAlign:'center'}}>
                  <p style={{margin: 'auto',textAlign:'center',fontSize:'14px'}}>Aug 2017-Aug 2018</p>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Deloitte</b><br/>Software Engineer</p>
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>
              <div style={{display:'flex',backgroundColor:'black',color:'white',borderRadius:'100%',width:'5vw',height:'5vw',textAlign:'center'}}>
                  <p style={{margin: 'auto',textAlign:'center',fontSize:'14px'}}>Jul 2015-Aug 2017</p>
                </div>
              </div>
              <div style={{flex:'1'}}>
                <p><b>Accenture</b><br/>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Projects</h1>
          <div>
            <div>
              <b>
                Community detection in networks with fuzzy boundaries
              </b>
              <p>In this paper, we presented simple yet effective ideas to sharpen the fuzzy boundaries between the communities in networks and proposed two algorithms for community detection known as SHCD and SRSTCD. We have used the concept of social harmony, space reduction and space transformation, and complement network for a given network in identify the fuzzy boundaries between the communities more accurately. Accepted for presentation at the ADM-MLDM Conference 2019.</p>
            </div>
            <div>
              <b>Hard Drive Failure Prediction using Machine Learning Methods</b>
              <p>The goal of our project is to identify hard disks which are at a risk of failing in a future time period. Our Machine learning model is trained on data obtained from several hard drive manufacturers, a publicly available dataset from Backblaze. Even with a highly skewed dataset, a base rate of 0.39%, we achieved recall of 0.89, precision of 0.85 and AUC ROC of 0.87 using AdaBoosted Decision Tree Classifier.</p>
            </div>
            <div>
              <b>Flood Prediction in the U.S. using Machine Learning Methods</b>
              <p>The goal of our project is to identify the flood-prone areas with probabilities of flooding in counties in a future date. We used Hadoop and Apache Spark MLlib package to train different ML models and used Grid Search algorithm for hyperparameter tuning. Out of all the different models, the Random Forrest Regressor performed the best with accuracy of 80%, precision of 0.85, recall of 0.80 and F1 score of 0.82.</p>
            </div>
            <div>
              <b>Programming Languages Trend and Sentiment Analysis</b>
              <p>Scraped StackOverflow and StackExchange data from 2010 through 2017 and performed data analysis on raw posts and comments data to gain insights about the upcoming programming languages and the overall satisfaction of the developer communities by the Sentiment analysis of the comments using NLTK, Pandas, NumPy, Matplotlib, Seaborn. We mitigated the challenge of having more than 100 GB of raw textual data by pre-processing our dataset on HDFS.</p>
            </div>
          </div>  
        </div>
    </div>
  </Layout>
)

export default IndexPage
