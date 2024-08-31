from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def start():
    return render_template('start.html')

@app.route('/countdown')
def countdown():
    return render_template('countdown.html')

@app.route('/practice')
def practice():
    return render_template('practice.html')

@app.route('/result')
def result():
    accuracy = request.args.get('accuracy')
    time = request.args.get('time')
    return render_template('result.html', accuracy=accuracy, time=time)

if __name__ == '__main__':
    app.run(debug=True)
