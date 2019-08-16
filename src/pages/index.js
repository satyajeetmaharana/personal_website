import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{}}>
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
              <ul>
                <li>
                  <div>
                    HTML
                  </div>
                  <div>
                    90%
                  </div>
                </li>
                <li>
                  <div>
                    Salesforce
                  </div>
                  <div>
                    90%
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
              <div style={{flex:'1'}}>May 2020</div>
              <div style={{flex:'1'}}>
                <p><b>New York University</b><br/>Master of Science in Computer Science</p>
              </div>
            </div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>May 2015</div>
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
              <div style={{flex:'1'}}>Present</div>
              <div style={{flex:'1'}}>
                <p><b>Altice USA</b><br/>Software Intern</p>
              </div>
            </div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>Aug 2017 to Aug 2018</div>
              <div style={{flex:'1'}}>
                <p><b>Deloitte</b><br/>Software Engineer</p>
              </div>
            </div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>Jul 2015 to Aug 2017</div>
              <div style={{flex:'1'}}>
                <p><b>Accenture</b><br/>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Projects</h1>
          <div>
            <div style={{display:'flex'}}>
              <div style={{flex:'1'}}></div>
              <div style={{flex:'1'}}>Present</div>
              <div style={{flex:'1'}}>
                <p><b>Altice USA</b><br/>Software Intern</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
