import React, {useState, useContext} from 'react'
import { Accordion, Card, AccordionContext, useAccordionButton, activeEventKey} from 'react-bootstrap'

const ComicSearch = ({children, eventKey, callback}) => {
    const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;
    
    
    
    return(
        <div className='comicsearchbutton'>
        <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'red' : 'blue' }}
      onClick={decoratedOnClick}
      className='comicsearchbtn'
    >
      {children}
    </button>
        </div>
    )
}


export default ComicSearch

