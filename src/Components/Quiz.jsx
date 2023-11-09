import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
function Quiz() {
    const [ans1, setAns1] = useState("HyperText Markup Language")
    const [ans2, setAns2] = useState("HTML, Head, Title, Body")
    const [ans3, setAns3] = useState("<b>")
    const [ans4, setAns4] = useState("horizontal ruler")
    const [score, setScore] = useState()
    const [answer1, setAnswer1] = useState()
    const [answer2, setAnswer2] = useState()
    const [answer3, setAnswer3] = useState()
    const [answer4, setAnswer4] = useState()


    const getData1 = (e) => {

        const { value } = e.target
        console.log(value);
        setAnswer1(value)
        /* if (value == ans1) {
            setScore(score + 1)
        } */
    }

    console.log(score);
    const getData2 = (e) => {

        const { value } = e.target
        console.log(value);
        setAnswer2(value)
        /*   if (value == ans2) {
              setScore(score + 1)
          } */
    }

    console.log(score);
    const getData3 = (e) => {

        const { value } = e.target
        console.log(value);
        setAnswer3(value)
        /* if (value == ans3) {
            setScore(score + 1)
        } */
    }


    const getData4 = (e) => {

        const { value } = e.target
        console.log(value);
        setAnswer4(value)
        /* if (value == ans4) {

            setScore(score + 1)
        } */
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!answer1 || !answer2 || !answer3 || !answer4) {
            alert('Some questions have been left blank')
        }
        else if (answer1 == ans1 && answer2 == ans2 && answer3 == ans3 && answer4 == ans4) {
            setScore(4)
        }
        else if (answer1 != ans1 && answer2 == ans2 && answer3 == ans3 && answer4 == ans4) {
            setScore(3)
        }

        else if (answer1 != ans1 && answer2 != ans2 && answer3 == ans3 && answer4 == ans4) {
            setScore(2)
        }

        else if (answer1 != ans1 && answer2 != ans2 && answer3 != ans3 && answer4 == ans4) {
            setScore(1)
        }

        else if (answer1 !== ans1 && answer2 !== ans2 && answer3 !== ans3 && answer4 !== ans4) {
            setScore(0)
        }

        else if (answer1 != ans1 && answer2 == ans2 && answer3 != ans3 && answer4 == ans4) {
            setScore(2)
        }
        else if (answer1 != ans1 && answer2 == ans2 && answer3 != ans3 && answer4 != ans4) {
            setScore(1)
        }
        else if (answer1 != ans1 && answer2 == ans2 && answer3 == ans3 && answer4 != ans4) {
            setScore(2)
        }
        else if (answer1 != ans1 && answer2 != ans2 && answer3 == ans3 && answer4 != ans4) {
            setScore(1)
        }



        else if (answer1 == ans1 && answer2 != ans2 && answer3 == ans3 && answer4 == ans4) {
            setScore(3)
        }

        else if (answer1 != ans1 && answer2 != ans2 && answer3 == ans3 && answer4 == ans4) {
            setScore(2)
        }

        else if (answer1 == ans1 && answer2 != ans2 && answer3 != ans3 && answer4 == ans4) {
            setScore(2)
        }
        else if (answer1 == ans1 && answer2 != ans2 && answer3 != ans3 && answer4 != ans4) {
            setScore(1)
        }
        else if (answer1 == ans1 && answer2 != ans2 && answer3 == ans3 && answer4 != ans4) {
            setScore(2)
        }

        else if (answer1 == ans1 && answer2 == ans2 && answer3 != ans3 && answer4 == ans4) {
            setScore(3)
        }
        else if (answer1 == ans1 && answer2 == ans2 && answer3 == ans3 && answer4 != ans4) {
            setScore(3)
        }

        else if (answer1 == ans1 && answer2 == ans2 && answer3 != ans3 && answer4 != ans4) {
            setScore(2)
        }


    }
    const percentage = (score / 4) * 100

    const navigate = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: "#8fc4b7" }}>

                {score >= 0 ?

                    <div >
                        <Row>
                            <Col lg={3}></Col>
                            <Col lg={3} >

                                <div style={{ marginTop: '100px',margin:'10px' }}></div>
                                <div style={{ backgroundColor: "rgb(30, 67, 30)", padding: '20px', borderRadius: '7px',color:'white' }}>
                                    <h2 >Scoring</h2>
                                    <h4>You Scored {score} / 4 = {percentage}%</h4>
                                    {
                                        score >= 3 ?
                                            <div>
                                                <h5>Congratulations <i class="fa-solid fa-hands-clapping" style={{ color: '#39892f' }}></i></h5>
                                            </div> :
                                            <div className='d-flex'>
                                                <h5>You must be study much harder <i class="fa-solid fa-exclamation  " style={{ color: '#ff0000' }}></i> </h5>
                                            </div>


                                    }
                                    <button className='btn btn-large btn-light' onClick={() => navigate('/')}><i class="fa-solid fa-less-than" style={{ color: '#1e1e20' }}></i> Previous</button>
                                </div>
                            </Col>
                        </Row>

                    </div>

                    : null}

                <form onSubmit={handleSubmit} >

                    
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6} style={{ padding: '40px', backgroundColor: "white", color: "black", marginTop: '40px',margin:'10px' }} className='card'>
                            <Container>

                                <h4 style={{ fontWeight: "bold" }}>Q.   HTML stands for -</h4>
                                <Row>
                                    <Col lg={1}>  </Col>
                                    <Col lg={8}>

                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={1}
                                                onChange={(e) => getData1(e)}
                                                value={"HighText Machine Language"}
                                                id={'a1'}
                                                label={`HighText Machine Language`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>


                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={1}
                                                onChange={(e) => getData1(e)}
                                                value={"HyperText and links Markup Language"}
                                                id={'b1'}
                                                label={`HyperText and links Markup Language`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>



                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={1}
                                                onChange={(e) => getData1(e)}
                                                value={"HyperText Markup Language"}
                                                id={'c1'}
                                                label={`HyperText Markup Language`}

                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-check" style={{ color: '#1f5132' }}></i> :
                                                null}
                                        </div>


                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={1}
                                                onChange={(e) => getData1(e)}
                                                value={"None of these"}
                                                id={'d1'}
                                                label={`None of these`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>



                                        <br></br>
                                        {score >= 0 ?
                                            <h6>Correct Answer :<span style={{ color: "#1f5132" }}>{ans1}</span> </h6> : null}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row><br></br>
                
                     <Row>
                     <Col lg={3}></Col>
                     <Col lg={6} style={{ padding: '40px', backgroundColor: "", color: "",margin:'10px' }} className='card'>
                         <Container>


                             <h4 style={{ fontWeight: "bold" }}>Q. The correct sequence of HTML tags for starting a webpage is -




                             </h4>

                             <Row>
                                 <Col lg={1}>  </Col>
                                 <Col lg={8}>
                                     <div className='d-flex'>
                                         <Form.Check // prettier-ignore
                                             type={'radio'}
                                             name={2}
                                             onChange={(e) => getData2(e)}
                                             value={"Head, Title, HTML, body"}
                                             id={'a2'}
                                             label={`Head, Title, HTML, body`}
                                         />
                                         {score >= 0 ?
                                             <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                     </div>




                                     <div className='d-flex'>

                                         <Form.Check // prettier-ignore
                                             type={'radio'}
                                             name={2}
                                             onChange={(e) => getData2(e)}
                                             value={"HTML, Body, Title, Head"}
                                             id={'b2'}
                                             label={`HTML, Body, Title, Head`}
                                         />
                                         {score >= 0 ?
                                             <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}

                                     </div>
                                     <div className='d-flex'>
                                         <Form.Check // prettier-ignore
                                             type={'radio'}
                                             name={2}
                                             onChange={(e) => getData2(e)}
                                             value={"HTML, Head, Title, Body"}
                                             id={'c2'}
                                             label={`HTML, Head, Title, Body`}
                                         />
                                         {score >= 0 ?
                                             <i class="fa-solid fa-check" style={{ color: '#1f5132' }}></i> :
                                             null}
                                     </div>


                                     <div className='d-flex'>
                                         <Form.Check // prettier-ignore
                                             type={'radio'}
                                             name={2}
                                             onChange={(e) => getData2(e)}
                                             value={"HTML,Title,Head, Body"}
                                             id={'d2'}
                                             label={`HTML,Title,Head, Body`}
                                         />
                                         {score >= 0 ?
                                             <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                     </div>

                                     <br></br>
                                     {score >= 0 ?
                                         <h6>Correct Answer :<span style={{ color: "#1f5132" }}>{ans2}</span> </h6> : null}

                                 </Col>
                             </Row>
                         </Container>
                     </Col>

                 </Row>
                 <br></br>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6} style={{ padding: '40px', backgroundColor: ")", color: "",margin:'10px' }} className='card'>
                            <Container>

                                <h4 style={{ fontWeight: "bold" }}>Q.Which of the following element is responsible for making the text bold in HTML?


                                </h4>

                                <Row>
                                    <Col lg={1}>  </Col>
                                    <Col lg={8}>
                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={3}
                                                onChange={(e) => getData3(e)}
                                                value={"<pre>"}
                                                id={'a3'}
                                                label={`<pre>`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>


                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={3}
                                                onChange={(e) => getData3(e)}
                                                value={"<a>"}
                                                id={'b3'}
                                                label={`<a>`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>

                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={3}
                                                onChange={(e) => getData3(e)}
                                                value={"<b>"}
                                                id={'c3'}
                                                label={`<b>`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-check" style={{ color: '#1f5132' }}></i> :
                                                null}
                                        </div>

                                        <div className='d-flex'>

                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={3}
                                                onChange={(e) => getData3(e)}
                                                value={"<br>"}
                                                id={'d3'}
                                                label={`<br>`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>


                                        <br></br>
                                        {score >= 0 ?
                                            <h6>Correct Answer :<span style={{ color: "#1f5132" }}>{ans3}</span> </h6> : null}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6} style={{ padding: '40px', backgroundColor: "white", color: "black",margin:'10px'}} className='card'>
                            <Container>



                                <h4 style={{ fontWeight: "bold" }}>Q. The hr tag in HTML is used for -</h4>

                                <Row>
                                    <Col lg={1}>  </Col>
                                    <Col lg={8}>
                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={4}
                                                onChange={(e) => getData4(e)}
                                                value={"new line"}
                                                id={'a4'}
                                                label={`new line`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>


                                        <div className='d-flex'>

                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={4}
                                                onChange={(e) => getData4(e)}
                                                value={"vertical ruler"}
                                                id={'b4'}
                                                label={`vertical ruler`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>


                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={4}
                                                onChange={(e) => getData4(e)}
                                                value={"new paragraph"}
                                                id={'c4'}
                                                label={`new paragraph`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-xmark" style={{ color: '#ff2600' }}></i> : null}
                                        </div>


                                        <div className='d-flex'>
                                            <Form.Check // prettier-ignore
                                                type={'radio'}
                                                name={4}
                                                onChange={(e) => getData4(e)}
                                                value={"horizontal ruler"}
                                                id={'d4'}
                                                label={`horizontal ruler`}
                                            />
                                            {score >= 0 ?
                                                <i class="fa-solid fa-check" style={{ color: '#1f5132' }}></i> :
                                                null}
                                        </div>

                                        <br></br>
                                        {score >= 0 ?
                                            <h6>Correct Answer :<span style={{ color: "#1f5132" }}>{ans4}</span> </h6> : null}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6} className=''>
                            {
                                score >= 0 ? null : <button className='btn btn-lg btn-success' type='submit'>Finish Quiz</button>
                            }



                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                </form>

            </div>
            {/*                   
           <ToastContainer position='top-center' theme='colored' autoClose={2000} /> */}
        </>
    )
}

export default Quiz