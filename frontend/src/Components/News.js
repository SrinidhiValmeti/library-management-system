import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h className='news-title'>Updates for You</h>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Competitions</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Book Review Contest</p>
                            <p>Write a detailed review of any book from our library collection. 
                            The most insightful and well-written reviews will win exciting prizes.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Essay Writing Competition</p>
                            <p>Participate in our essay competition on the topic "The Role of Libraries in Education." </p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Reading Challenge</p>
                            <p>How many books can you read in a month? Join our reading challenge to discover 
                                new books, and compete for the title of "Top Reader of the Month.".</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Library Quiz</p>
                            <p>Test your knowledge with our fun and interactive library quiz! Answer questions 
                                about literature, library history, and more.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Creative Writing Workshop & Competition</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Online Quiz</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>Literature</p>
                            <p>Test your knowledge on classic and modern literature, authors, book quotes, and literary genres.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-2</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-3</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-4</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-5</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
