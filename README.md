# Social Distancing Checker using DL using pre-trained YOLOv4 model !
COVID-19 social distancing detector using OpenCV, Deep Learning, and Computer Vision. OpenCV and deep learning can be used to implement a social distancing detector. Our configuration file used to keep our implementation neat and tidy. Our detect_people utility function, which detects people in video streams using the YOLO object detection. Our Python driver script, which glues all the pieces together into a full-fledged OpenCV social distancing detector. Apply object detection to detect all people (and only people) in a video stream (see this tutorial on building an OpenCV people counter). Compute the pairwise distances between all detected people. Based on these distances, check to see if any two people are less than N pixels apart.

Detect the social distance violations in real time using OpenCV and deep learning

> ## ***"Social distancing is the only way to counter Covid-19"***

**Requirements (Technologies used)**
- Python
- Numpy
- OpenCV (for frame/image processing )
- DeepLearning (Used YOLO V4 Pretrained model for object Detection-(used filter for people indentification only)
- Scipy
- Centroid Tracking Algo (For object  tracking)
- Object Detection models (Mobilenet or Googlenet or YOLO)

### RESULT OF MODEL ON TESTING 

## 1. Video1 Output
https://github.com/akshupande/Social-Distancing-Detector/blob/2fc5c0c91f7a0c3038d32e9917570ffaa4fccba4/Output/output.avi

## 2. Video2 Output
https://github.com/akshupande/Social-Distancing-Detector/blob/2fc5c0c91f7a0c3038d32e9917570ffaa4fccba4/Output/output2.mp4

## Effective in surveillance for catching social distancing Violators.

### ⏳ Future upgrades:

| Features                                              | Status                                                                |
| ----------------------------------------------------- | --------------------------------------------------------------------- |
| Camera calibration for intrinsic parameter (distance) | ![STATUS](https://img.shields.io/badge/camera_calibration-TBD-orange) |
| Add facemask detection                                | ![STATUS](https://img.shields.io/badge/face_mask-TBD-orange)          |
| upgrade to YOLO v7                                    | ![STATUS](https://img.shields.io/badge/build-passed-brightgreen)      |


## Kindly check out below links:

**👀 YOLO Pre-Trained Model** </br>
[![YOLO](https://img.shields.io/badge/YOLO-Darknet-YELLOW)](https://pjreddie.com/darknet/yolo/) [![Darknet](https://img.shields.io/badge/Darknet-GitHub-lightgrey)](https://github.com/pjreddie/darknet.git)

**📊 Dataset** </br>
MegaPixels: Origins, Ethics, and Privacy Implications of Publicly Available Face Recognition Image Datasets </br>
