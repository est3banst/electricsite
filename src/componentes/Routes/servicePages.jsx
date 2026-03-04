// ─── Panel.jsx ───────────────────────────────────────────────────────────────
import ServicePage from './ServicePage';

export function Panel() {
  return (
    <ServicePage
      title="Paneles Solares"
      subtitle="Energía solar"
      description="¿Por qué no aprovechar la energía del sol para reducir tus costos energéticos? Nuestro equipo se encarga de todo el proceso, desde la evaluación del espacio hasta la instalación completa."
      groups={[
        {
          heading: 'Instalación de paneles solares',
          caption: 'Hacé la elección inteligente: elegí la energía solar. Garantizamos un rendimiento óptimo y duradero en cada instalación.',
          images: [
            '/imgs/fotos2/panels.jpeg',
            '/imgs/work-galler/paneles/panelone.jpg',
            '/imgs/fotos2/panels2.jpeg',
            '/imgs/fotos2/panels3.jpeg',
            '/imgs/fotos2/panels4.jpeg',
            '/imgs/work-galler/paneles/panelfive.jpg',
          ],
        },
      ]}
    />
  );
}

// ─── Negocio.jsx (Fibra Óptica) ───────────────────────────────────────────────
export function Negocio() {
  return (
    <ServicePage
      title="Asesoría en Redes"
      subtitle="Fibra óptica & telecomunicaciones"
      description="Salto Instalaciones es tu equipo de confianza para el diseño, planificación e instalación de redes de fibra óptica y telecomunicaciones."
      groups={[
        {
          heading: 'Diseño de redes e instalaciones',
          caption: 'Asesoría, planificación e instalaciones de redes de fibra óptica para hogares y empresas.',
          images: [
            '/imgs/hugo-fr-o.jpeg',
            '/imgs/work-galler/fibra-optica/fibra3.jpeg',
            '/imgs/work-galler/fibra-optica/fibra5.jpeg',
            '/imgs/work-galler/fibra-optica/fibra4.jpeg',
            '/imgs/work-galler/fibra-optica/fibra2.jpeg',
            '/imgs/work-galler/fibra-optica/fibra1.jpeg',
          ],
        },
      ]}
    />
  );
}

// ─── Camaras.jsx ─────────────────────────────────────────────────────────────
export function Camaras() {
  return (
    <ServicePage
      title="Videovigilancia"
      subtitle="Sistemas de seguridad"
      description="Asegurá tu vivienda o negocio con nuestras instalaciones de videovigilancia en el día. Equipos modernos, instalación profesional."
      groups={[
        {
          heading: 'Sistemas de videovigilancia',
          caption: 'Instalaciones de cámaras de seguridad para hogares y comercios, en el día y con garantía.',
          images: [
            '/imgs/fotos/camera1.jpeg',
            '/imgs/work-galler/cctv/cctv1.jpg',
            '/imgs/fotos/camera2.jpeg',
            '/imgs/fotos/camera3.jpeg',
            '/imgs/fotos/camera4.jpeg',
          ],
        },
      ]}
    />
  );
}

// ─── Climate.jsx ─────────────────────────────────────────────────────────────
export function Climate() {
  return (
    <ServicePage
      title="Climatización de Piscinas"
      subtitle="Confort todo el año"
      description="Modernos climatizadores eficientes utilizando tecnologías como bombas de calor o intercambiadores de calor, que extraen energía del aire o del sol para calentar el agua de tu piscina."
      groups={[
        {
          heading: 'Climatización de piscinas',
          caption: 'Sistemas eficientes para disfrutar tu piscina durante todo el año, con mínimo consumo energético.',
          images: [
            '/imgs/work-galler/climatizacion/pool.jpg',
            '/imgs/work-galler/climatizacion/pool1.jpg',
            '/imgs/work-galler/climatizacion/pool2.jpg',
            '/imgs/work-galler/climatizacion/poolone.jpg',
            '/imgs/work-galler/climatizacion/pooltwo.jpg',
            '/imgs/work-galler/climatizacion/poolthree.jpg',
          ],
        },
      ]}
    />
  );
}

// ─── House.jsx ───────────────────────────────────────────────────────────────
export function House() {
  return (
    <ServicePage
      title="Instalaciones Eléctricas"
      subtitle="Domiciliario & obras"
      description="Electricistas altamente calificados y listos para atender tus demandas. Desde instalaciones domiciliarias hasta asesoría y ejecución completa en obras."
      groups={[
        {
          heading: 'Instalaciones eléctricas domiciliarias',
          caption: 'Nos aseguramos de que cada trabajo se realice con la más alta calidad y profesionalismo en la comodidad de tu hogar.',
          images: [
            '/imgs/work-galler/house/bath.jpg',
            '/imgs/work-galler/house/bath2.jpg',
            '/imgs/work-galler/house/ligths.jpg',
            '/imgs/work-galler/house/ligths2.jpg',
            '/imgs/work-galler/house/houseone.jpg',
            '/imgs/work-galler/house/housetwo.jpg',
          ],
        },
        {
          heading: 'Instalaciones y asesoría en obras',
          caption: 'Contratar a un buen electricista es crucial para el éxito de tu obra. Desde asesoría de primera mano hasta la planificación y ejecución de instalaciones completas.',
          images: [
            '/imgs/work-galler/house/obrafive.jpg',
            '/imgs/work-galler/house/obraone.jpg',
            '/imgs/work-galler/house/obrafour.jpg',
            '/imgs/work-galler/house/obraseven.jpg',
            '/imgs/fotodos.jpeg',
            '/imgs/fotouno.jpeg',
          ],
        },
      ]}
    />
  );
}