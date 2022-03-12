# ColorFit

AI가 제공해주는 나만의 퍼스널컬러 진단을 받아보고, 나에게 어울리는 옷 색상을 알아보세요!

## 1. 프로젝트 소개

Personal Color는 개인 고유의 신체색을 의미하며, 개인의 특성을 분석하여 퍼스널컬러 타입 분류체계의 한 타입에 개인을 대응시켜 그에 조화를 이루는 색을 진단하여 적합한 메이크업, 헤어, 의상 등의 색채 이미지를 연출하는 시스템입니다.

`ColorFit`은 사용자가 업로드한 사진을 딥러닝 모델을 적용하여 퍼스널컬러 타입을 진단하고, 진단 결과와 퍼스널컬러 팔레트를 기반으로 패션 매칭 서비스를 제공합니다. 기존에 사람의 눈에 의해 판단되었던 주관적인 퍼스널 컬러 타입의 진단 과정을 사용자에게 제공받은 사진을 Face Detection, Align, Crop 등 전처리를 거쳐 얻은 데이터로 학습한 딥러닝 모델로 사용자의 퍼스널 컬러 타입을 진단합니다.




## 2. 기술 스택

<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"><img src="https://img.shields.io/badge/Python-3.8-3776AB?style=for-the-badge&logo=Python&logoColor=white"><img src="https://img.shields.io/badge/Tensorflow-2.8-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white">

#### Back-end : <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"> <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> <img src="https://img.shields.io/badge/gunicorn-499848?style=for-the-badge&logo=gunicorn&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/aws S3-FF9900?style=for-the-badge&logo=Amazon S3&logoColor=white">

#### Front-end : <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/axios-5a29e4?style=for-the-badge&logo=axios&logoColor=white"><img src="https://img.shields.io/badge/recoil-0079f4?style=for-the-badge&logo=recoil&logoColor=white"><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

#### AI : <img src="https://img.shields.io/badge/yolo-v3-00FFFF?style=for-the-badge&logo=yolo&logoColor=white"><img src="https://img.shields.io/badge/mobilenet-v2-f59af8?style=for-the-badge&logo=mobilenet&logoColor=white">




## 3. 실행 방법(ubuntu 20.04 기준)

1. `docker` 설치 (https://docs.docker.com/engine/install/ubuntu/)

2. nvidia driver + `nvidia-docker2` 설치 (https://github.com/NVIDIA/nvidia-docker)

3. `git clone {repo http address}`

4. `colorfit/backend$ python3 -m venv env`로 가상환경 생성

5. `colorfit/backend$ source env/bin/activate`로 활성화

6. `colorfit/backend$ pip install -r requirements.txt`

7. 6에서 tensorflow나 다른 라이브러리가 없다는 에러가 날 경우 설치해도 되고, 해당부분은 주석처리하고 8번까지 실행한 후 다시 주석 해제하고 9번부터 실행

8. `backend/app/migrations/0001_initial.py` 없다면 `colorfit/backend$ python manage.py makemigrations`

9. `colorfit$ docker-compose up`

10. `colorfit$ docker-compose exec backend python manage.py migrate`

11. 접속!

12. `colorfit$ docker-compose down`으로 종료

    


## 4. 서비스 주요 기능 설명

  - 얼굴 사진을 업로드하면 퍼스널 컬러를 분석하여 '봄 웜톤', '여름 쿨톤', '가을 웜톤', '겨울 쿨톤'의 결과를 제공합니다.![image-20220312094403147](./docs/color-result.png)
  - 옷 사진을 업로드하면 옷과 각 계절별 톤과의 적합도를 persentage로, 사용자의 퍼스널 컬러와의 적합도를 세 가지 state로 제공합니다.![](./docs/clothes-result.JPG)

- 퍼스널 컬러를 맞춰보는 미니 게임을 제공합니다.

  ![image-20220312094301536](./docs/minigame.png)




## 5. 프로젝트 팀원

| 이름 | 담당 업무 |
| ------ | ------ |
| 강주성 | 팀장/백엔드 개발 |
| 박수영 | 백엔드 개발 |
| 배경태 | 프론트엔드 개발 |
| 임미선 | 프론트엔드 개발 |
| 심소민 | 인공지능 개발 |
| 백승수 | 인공지능 개발 |




## 6. 프로젝트 상세 기획 내용

[프로젝트 기획서](https://kdt-gitlab.elice.io/ai_track/class_03/ai_project/team13/colorfit/-/wikis/home)

