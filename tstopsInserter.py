import requests
import json

if __name__ == "__main__" :
    f = open("travel-stop.json", "r")
    stops = json.loads(f.read())
    f.close()
    
    for stop in stops['stops'] :
        if not stop.get('image', '') :
            stop['image'] = "https://pds.joins.com/news/component/htmlphoto_mmdata/201408/08/htm_20140808162735l300l303.jpg"
        res = requests.post("http://localhost/travelstop/upload",
        data=stop)
        print(res.text)
