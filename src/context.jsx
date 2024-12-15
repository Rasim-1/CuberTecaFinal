import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // Состояние для управления меню
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  }

  const closeMenu = () => {
    setIsActive(false);
  }

  // Состояние для управления видимостью продуктов
  const [visiblProducts, setVisiblProducts] = useState(4);
  const loadMoreProducts = () => {
    setVisiblProducts(prev => prev + 4);
  }

  // Состояние для управления 3D-сценой
  const [sceneReady, setSceneReady] = useState(false);
  const mountRef = useRef(null); // ссылка на элемент, куда будет добавляться 3D-сцена

  // Функция для создания 3D-сцены
  const create3DScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement); // добавление канваса в DOM

    // Создание простых объектов
    const geometry = new THREE.BoxGeometry(1, 1, 1); // создание коробки
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Установка камеры
    camera.position.z = 5;

    // Добавляем OrbitControls для управления камерой
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    // Функция анимации
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      controls.update(); // Обновляем управление камерой
      renderer.render(scene, camera);
    };
    animate();

    // Обработка изменения размеров экрана
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    setSceneReady(true); // Сцена готова к рендерингу
  };

  useEffect(() => {
    if (mountRef.current) {
      create3DScene(); // Создаем 3D-сцену при монтировании компонента
    }
    return () => {
      // Очистка сцены при размонтировании компонента
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
    };
  }, []);

  const value = {
    isActive,
    toggleMenu,
    closeMenu, 
    visiblProducts,
    loadMoreProducts,
    sceneReady,
    mountRef, // Добавляем ссылку на DOM-элемент для рендеринга 3D-сцены
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
