import React from 'react';
import SVGInline from 'react-svg-inline';

const Brand = () => (
  <div className="brand">
    <SVGInline svg={'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 72"><path class="outline" d="M246.564 46.834a23.959 23.959 0 0 0 3.938-4.885c2.052-3.346 3.091-7.314 3.091-11.789 0-3.701-.712-7.104-2.117-10.112a21.757 21.757 0 0 0-6.095-7.778 23.68 23.68 0 0 0-4.391-2.787c-.081-.043-9.77-4.887-9.855-4.928a28.93 28.93 0 0 0-5.141-2.015c-3.414-.988-7.282-1.489-11.492-1.489h-23.143a7.09 7.09 0 0 0-4.622 1.707c-.079-.045-1.68-.84-1.766-.882a6.692 6.692 0 0 0-3.23-.824h-17.279c-2.03 0-3.756.54-5.136 1.614-.523.407-.986.85-1.401 1.318l-.08-.039c-.085-.044-3.959-1.98-4.045-2.021a7.073 7.073 0 0 0-3.41-.872h-14.935a7.105 7.105 0 0 0-4.761 1.833c-.083-.045-1.932-.966-2.018-1.009a6.717 6.717 0 0 0-3.229-.824h-14.544c-1.949 0-3.602.47-4.908 1.393-1.126.794-2.548 2.326-2.918 5.106l-.737 6.089a8.167 8.167 0 0 0-2.775-.469h-1.309l-.061-.504-.009-.068c-.373-2.774-1.79-4.303-2.916-5.099a6.866 6.866 0 0 0-1.105-.633c-.084-.043-9.77-4.89-9.857-4.928-1.15-.587-2.508-.888-4.055-.888H65.711a6.712 6.712 0 0 0-4.631 1.848c-.065-.034-1.88-.936-1.966-.977a7.068 7.068 0 0 0-3.41-.872H40.378a7.112 7.112 0 0 0-5.059 2.106 7.236 7.236 0 0 0-1.511 2.217c-.026-.015-6.823-3.41-6.907-3.451a7.068 7.068 0 0 0-3.41-.872H8.166a7.116 7.116 0 0 0-5.06 2.106A7.12 7.12 0 0 0 1 8.217v50.509c0 2.021.792 3.875 2.221 5.21a7.186 7.186 0 0 0 1.823 1.251c.084.046 9.773 4.891 9.858 4.928a7.114 7.114 0 0 0 3.375.834H33.6a7.119 7.119 0 0 0 5.061-2.105 7.255 7.255 0 0 0 1.509-2.216c.026.01 6.817 3.406 6.903 3.449a7.113 7.113 0 0 0 3.416.872h15.325a7.123 7.123 0 0 0 5.062-2.105 7.175 7.175 0 0 0 1.777-2.934c.077.041 7.981 3.99 8.065 4.032 1.232.66 2.642 1.007 4.173 1.007h11.18c3.143 0 5.025-1.348 6.058-2.486.717-.795 1.227-1.506 1.584-2.22.082.044 7.493 3.75 7.581 3.792 1.019.53 2.335.914 4.011.914h11.181c2.393 0 4.496-.839 6.079-2.419a9.26 9.26 0 0 0 1.729-2.384l.02.01c.08.047 7.747 3.878 7.833 3.921a7.12 7.12 0 0 0 3.415.872h14.936a7.126 7.126 0 0 0 5.062-2.106c.359-.362.675-.754.947-1.174.062.033 4.659 2.332 4.746 2.372 1.172.598 2.54.908 4.099.908h17.828a6.698 6.698 0 0 0 3.986-1.314c.041.022.8.399.886.442a7.11 7.11 0 0 0 3.416.872h15.324a7.13 7.13 0 0 0 5.062-2.105 7.459 7.459 0 0 0 1.09-1.406c.018.009 5.022 2.512 5.109 2.554 1.033.547 2.394.958 4.142.958h16.027a6.73 6.73 0 0 0 4.789-1.991 6.726 6.726 0 0 0 1.987-4.785c0-1.047-.259-2.098-.768-3.117l-7.666-14.223z"/><path class="type" d="M55.135 5.871c.577 0 1.076.21 1.498.63.42.421.63.92.63 1.497v50.907c0 .579-.21 1.078-.63 1.498-.421.423-.92.631-1.498.631H39.689a2.033 2.033 0 0 1-1.497-.631 2.042 2.042 0 0 1-.63-1.498V41.884H24.795v17.021a2.05 2.05 0 0 1-.63 1.498c-.421.423-.92.631-1.497.631H7.222a2.106 2.106 0 0 1-1.497-.591c-.421-.394-.63-.906-.63-1.538V7.998c0-.577.209-1.076.63-1.497.419-.42.918-.63 1.497-.63h15.446c.577 0 1.076.21 1.497.63.419.421.63.92.63 1.497v16.55h12.767V7.998c0-.577.209-1.076.63-1.497.42-.42.918-.63 1.497-.63h15.446zm40.189 36.88l-6.462 16.154c-.105.315-.408.749-.906 1.301-.5.552-1.274.828-2.325.828H74.362c-1.051 0-1.891-.315-2.522-.945-.63-.632-.998-1.312-1.103-2.049l-7.25-50.2v-.236c0-.473.17-.879.512-1.222.341-.34.749-.512 1.222-.512h14.658c.893 0 1.563.158 2.009.473.446.315.722.867.828 1.655l2.68 22.223 3.23-9.85c.104-.367.341-.839.709-1.419.367-.577 1.025-.867 1.971-.867h8.038c.946 0 1.602.29 1.97.867.368.58.604 1.052.71 1.419l3.23 9.772 2.68-22.145c.105-.788.38-1.339.828-1.655.445-.315 1.115-.473 2.009-.473h14.658c.473 0 .879.171 1.221.512.34.342.512.749.512 1.222v.236l-7.25 50.2c-.105.736-.473 1.417-1.104 2.049-.63.63-1.472.945-2.521.945h-11.269c-1.052 0-1.827-.276-2.325-.828-.5-.552-.801-.985-.906-1.301l-6.463-16.154zm89.678 15.683c.157.263.236.551.236.867 0 .473-.171.88-.513 1.222a1.661 1.661 0 0 1-1.221.512h-17.968c-1.051 0-1.826-.235-2.324-.708-.5-.473-.802-.842-.906-1.105l-9.615-17.178v16.862c0 .579-.21 1.078-.629 1.498a2.04 2.04 0 0 1-1.497.631h-15.052c-.58 0-1.079-.208-1.498-.631a2.046 2.046 0 0 1-.631-1.498V7.998c0-.577.211-1.076.631-1.497.419-.42.918-.63 1.498-.63h15.052c.576 0 1.075.21 1.497.63.419.421.629.92.629 1.497v15.604l8.907-15.998c.261-.419.629-.813 1.102-1.182.474-.367 1.156-.552 2.049-.552h17.416c.473 0 .88.171 1.221.512.342.342.512.749.512 1.222 0 .368-.077.658-.235.867L169.478 32.27l15.524 26.164zm55.477 0c.157.315.236.605.236.867 0 .473-.171.88-.513 1.222a1.663 1.663 0 0 1-1.221.512h-16.155c-1.052 0-1.84-.263-2.364-.788-.526-.525-.867-.972-1.024-1.341l-6.777-15.049h-3.231v15.049c0 .579-.209 1.078-.629 1.498a2.04 2.04 0 0 1-1.497.631h-15.446a2.033 2.033 0 0 1-1.497-.631 2.038 2.038 0 0 1-.63-1.498V7.998c0-.577.208-1.076.63-1.497.42-.42.918-.63 1.497-.63h23.326c3.782 0 7.171.434 10.166 1.301 2.994.867 5.516 2.128 7.563 3.782a16.77 16.77 0 0 1 4.729 6.029c1.104 2.364 1.656 5.043 1.656 8.039 0 3.573-.788 6.647-2.365 9.22-1.575 2.576-3.624 4.648-6.146 6.225l9.692 17.967zM209.43 28.882h5.754c1.207 0 2.114-.407 2.718-1.222.604-.814.907-1.746.907-2.798 0-1.05-.276-2.036-.828-2.955s-1.484-1.379-2.797-1.379h-5.754v8.354z"/></svg>'} />
  </div>
);

export default Brand;