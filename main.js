function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/2p1xO4fUk/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}