import React from 'react';
import clientDataStore from '../../lib/ClientDataStore';
import TrackingService from '../../lib/TrackingService';

class Quotes extends React.Component {
  constructor() {
    super();

    this.quoteList = [
      "If you're not having fun you suck",
      "An attempt in shameless self promotion",
      "You aren't doing it wrong if no one knows what you're doing",
      "No one questions someone who looks like they belong there",
      "Pain isn't always weakness leaving the body; sometimes it's just stupidity",
      "rm -rf /",
      "Merchandising, Merchandising, Merchandising",
      "Shut up and build it"
    ];

    this.b_getRandomQuote = this.getRandomQuote.bind(this);
    this.b_newQuote = this.newQuote.bind(this);

    this.state = {
      quote:null
    };

    this.animating = false;
  }


  componentWillMount(){

    if (!clientDataStore.get("quote")){
      let quote = this.b_getRandomQuote(this.props.initialQuote);

      this.setState({
        quote
      });

      clientDataStore.put("quote",quote);
    }else{
      this.setState({
        quote:clientDataStore.get("quote")
      });
    }
  }

  getRandomQuote(initialVector = null){
    var quote = null;
    var lastIndex = -1;

    if (this.state != undefined){
      lastIndex = this.quoteList.indexOf(this.state.quote);
    }

    while (quote == null){
      var index = Math.floor( ( (initialVector !== null) ? initialVector : Math.random() ) * this.quoteList.length);

      if (index != lastIndex){
        quote = this.quoteList[index];
      }
    }

    return quote;
  }

  isAnimating(){
    return this.animating;
  }

  newQuote(){

    if (this.animating === false){
      let currentQuote = "";
      let newQuote;
      let interval;

      this.setState({
        quote:""
      });

      this.animating = true;

      newQuote = this.b_getRandomQuote();
      clientDataStore.put("quote",newQuote);

      TrackingService.event("Fun","Quote click",{});

      interval = setInterval(function(){
        if (currentQuote.length == newQuote.length){

          this.animating = false;

          clearInterval(interval);
          return;

        }else{
          currentQuote = newQuote.substring( 0 , currentQuote.length + 1 );

          this.setState({
            quote:currentQuote
          });

        }
      }.bind(this), 25 );
    }
  }

  render() {
		return (
			<div className='quotes'>
        <p><button onClick={this.b_newQuote}>{this.state.quote}</button></p>
      </div>
		);
  }
}

export default Quotes;
