
import json
from yolo_autolabel.inference import auto_label

def lambda_handler(event, context):
    image_url = event['queryStringParameters']['image']
    
    # Download image
    import urllib.request
    local_path = "/tmp/image.jpg"
    urllib.request.urlretrieve(image_url, local_path)
    
    labels = auto_label(local_path)
    
    return {
        'statusCode': 200,
        'body': json.dumps({"labels": labels})
    }
