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
        <div>
        <button
      type="button"
      style={{ visibility: isCurrentEventKey ? 'visible' : 'inherit' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
        </div>
    )
}


export default ComicSearch

