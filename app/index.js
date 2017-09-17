import j from 'jquery'
import _ from 'lodash'

function component(){
    // var element = document.createElement('div')
    var element = j('<div></div>')

    // element.innerHTML = _.join(['Hello','Webpack'], ' ')
    element.html(_.join(['Hi','hot /'], ' '));

    // return element
    return element.get(0)
}


document.body.appendChild(component())