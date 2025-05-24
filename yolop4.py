
from ultralytics import YOLO
import cv2

model = YOLO("yolov8n.pt")

def auto_label(image_path):
    results = model(image_path)
    labels = []
    for r in results:
        for box in r.boxes:
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            if conf > 0.5:
                labels.append({
                    "class": model.names[cls],
                    "confidence": round(conf, 2),
                    "bbox": box.xyxy[0].tolist()
                })
    return labels

