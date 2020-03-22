const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && position > 0 && position <= this.links.length) {
      this.links.splice(position - 1, 1)
      return this
    } else {
      this.links = []
      throw new Error()
    }
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let chain='';
    for(let i=0;i<this.links.length;i++){
      chain+='( '+this.links[i]+' )~~'
    }
    chain=chain.slice(0, chain.length-2);
    this.links=[];
    return chain;
  }
};

module.exports = chainMaker;

