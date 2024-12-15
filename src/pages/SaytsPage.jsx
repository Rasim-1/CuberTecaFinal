import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Sayts = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
  
    // Камера
    camera.position.set(0, 20, 30);
    camera.lookAt(0, 0, 0);
  
    // Управление камерой
    const controls = new OrbitControls(camera, renderer.domElement);
  
    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
  
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
  
    // Локальные данные карты
    const mapData = [
      {
        name: "Admin",
        position: { x: -20, y: 0.5, z: 10 },
        size: { width: 5, height: 5 },
        color: "#666666",
        image: "/images/admin.jpg",
      },
      {
        name: "PS",
        position: { x: 15, y: 0.5, z: 10 },
        size: { width: 8, height: 5 },
        color: "#4B89FF",
        image: "/images/ps.jpg",
      },
      {
        name: "Desk 5-8",
        position: { x: -15, y: 0.5, z: 0 },
        size: { width: 10, height: 2 },
        color: "#FF68A5",
        image: "/images/desk_5_8.jpg",
      },
      {
        name: "Desk 38",
        position: { x: -12, y: 0.5, z: -10 },
        size: { width: 2, height: 2 },
        color: "#FF68A5",
        image: "/images/desk_38.jpg",
      },
    ];
  
    // Загрузка объектов карты
    const textureLoader = new THREE.TextureLoader();
    mapData.forEach((object) => {
      const geometry = new THREE.BoxGeometry(object.size.width, 1, object.size.height);
      const material = object.image
        ? new THREE.MeshBasicMaterial({ map: textureLoader.load(object.image) })
        : new THREE.MeshBasicMaterial({ color: object.color });
  
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(object.position.x, object.position.y, object.position.z);
      scene.add(mesh);
    });
  
    // Игрок
    const playerGeometry = new THREE.BoxGeometry(1, 2, 1);
    const playerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const player = new THREE.Mesh(playerGeometry, playerMaterial);
    player.position.set(0, 1, 0);
    scene.add(player);
  
    // Управление игроком
    const keys = {};
    const speed = 0.5;
  
    const movePlayer = () => {
      if (keys['ArrowUp'] || keys['KeyW']) player.position.z -= speed;
      if (keys['ArrowDown'] || keys['KeyS']) player.position.z += speed;
      if (keys['ArrowLeft'] || keys['KeyA']) player.position.x -= speed;
      if (keys['ArrowRight'] || keys['KeyD']) player.position.x += speed;
    };
  
    // Анимация
    const animate = () => {
      requestAnimationFrame(animate);
      movePlayer();
      controls.update();
      renderer.render(scene, camera);
    };
  
    animate();
  
    // Слушатели событий клавиатуры
    const onKeyDown = (event) => {
      keys[event.code] = true;
    };
  
    const onKeyUp = (event) => {
      keys[event.code] = false;
    };
  
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
  
    // Очистка
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement); // Убираем canvas
        renderer.dispose(); // Освобождаем ресурсы рендера
      }
    };
  }, []);
  

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Sayts;
