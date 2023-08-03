export const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      fill='none'
      viewBox='0 0 21 20'
    >
      <path
        fill={props.fill || '#737373'}
        d='M11.154 14.65a.936.936 0 0 1 0 1.329l-.464.464a4.689 4.689 0 1 1-6.631-6.631l1.884-1.884a4.687 4.687 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.813 2.813 0 0 0-3.857.114l-1.883 1.882a2.813 2.813 0 1 0 3.978 3.978l.464-.464a.936.936 0 0 1 1.327 0ZM16.94 3.558a4.695 4.695 0 0 0-6.63 0l-.465.464a.94.94 0 1 0 1.328 1.328l.464-.464a2.813 2.813 0 0 1 3.978 3.978l-1.883 1.885a2.813 2.813 0 0 1-3.858.111.942.942 0 0 0-1.25 1.407 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .002-6.633v-.002Z'
      />
    </svg>
  );
};

export const PreviewIcon = ({
  isActive,
  ...props
}: { isActive: boolean } & React.SVGProps<SVGSVGElement>) => {
  return (
    <div>
      {!isActive ? (
        <div className='px-4 py-[11px] rounded-lg border border-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='none'
            viewBox='0 0 20 20'
            {...props}
          >
            <path
              fill='#633CFF'
              d='M19.61 9.62c-.03-.064-.714-1.583-2.225-3.095-2.023-2.02-4.572-3.088-7.385-3.088-2.812 0-5.362 1.068-7.382 3.088C1.106 8.037.422 9.556.391 9.62a.944.944 0 0 0 0 .761c.029.064.713 1.583 2.226 3.095 2.021 2.02 4.57 3.086 7.383 3.086 2.813 0 5.362-1.067 7.381-3.086 1.513-1.512 2.197-3.03 2.226-3.095a.946.946 0 0 0 .003-.761Zm-3.599 2.578c-1.677 1.651-3.7 2.49-6.01 2.49-2.313 0-4.334-.839-6.01-2.491A10.185 10.185 0 0 1 2.307 10a10.192 10.192 0 0 1 1.686-2.196C5.667 6.15 7.688 5.312 10 5.312s4.333.839 6.009 2.492c.659.652 1.226 1.39 1.685 2.196a10.19 10.19 0 0 1-1.685 2.197h.002Zm-6.01-5.636a3.438 3.438 0 1 0 0 6.876 3.438 3.438 0 0 0 0-6.876Zm0 5A1.562 1.562 0 1 1 10 8.438a1.562 1.562 0 0 1 0 3.124Z'
            />
          </svg>
        </div>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='none'
          viewBox='0 0 20 20'
          {...props}
        >
          <path
            fill='#633CFF'
            d='M19.61 9.62c-.03-.064-.714-1.583-2.225-3.095-2.023-2.02-4.572-3.088-7.385-3.088-2.812 0-5.362 1.068-7.382 3.088C1.106 8.037.422 9.556.391 9.62a.944.944 0 0 0 0 .761c.029.064.713 1.583 2.226 3.095 2.021 2.02 4.57 3.086 7.383 3.086 2.813 0 5.362-1.067 7.381-3.086 1.513-1.512 2.197-3.03 2.226-3.095a.946.946 0 0 0 .003-.761Zm-3.599 2.578c-1.677 1.651-3.7 2.49-6.01 2.49-2.313 0-4.334-.839-6.01-2.491A10.185 10.185 0 0 1 2.307 10a10.192 10.192 0 0 1 1.686-2.196C5.667 6.15 7.688 5.312 10 5.312s4.333.839 6.009 2.492c.659.652 1.226 1.39 1.685 2.196a10.19 10.19 0 0 1-1.685 2.197h.002Zm-6.01-5.636a3.438 3.438 0 1 0 0 6.876 3.438 3.438 0 0 0 0-6.876Zm0 5A1.562 1.562 0 1 1 10 8.438a1.562 1.562 0 0 1 0 3.124Z'
          />
        </svg>
      )}
    </div>
  );
};

export const ProfileIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      fill='none'
      viewBox='0 0 21 20'
      {...props}
    >
      <path
        fill={props.fill || '#737373'}
        d='M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z'
      />
    </svg>
  );
};

export const DevlinksIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
    >
      <path
        fill='#633CFF'
        fillRule='evenodd'
        d='M4.619 27.38c1.954 1.953 5.095 1.953 11.38 1.953 6.286 0 9.429 0 11.38-1.953 1.954-1.95 1.954-5.095 1.954-11.38 0-6.286 0-9.428-1.953-11.381C25.43 2.667 22.285 2.667 16 2.667c-6.286 0-9.428 0-11.381 1.952-1.952 1.954-1.952 5.095-1.952 11.38 0 6.286 0 9.429 1.952 11.38Zm8.047-15.713A4.333 4.333 0 1 0 17 16a1 1 0 0 1 2 0 6.333 6.333 0 1 1-6.334-6.334 1 1 0 1 1 0 2Zm11 4.333a4.333 4.333 0 0 1-4.333 4.333 1 1 0 1 0 0 2A6.333 6.333 0 1 0 13 16a1 1 0 1 0 2 0 4.334 4.334 0 0 1 8.666 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export const DragAndDropIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='6'
      fill='none'
      viewBox='0 0 12 6'
    >
      <path fill='#737373' d='M0 0h12v1H0zM0 5h12v1H0z' />
    </svg>
  );
};

export const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='9'
      fill='none'
      viewBox='0 0 14 9'
      {...props}
    >
      <path stroke='#633CFF' strokeWidth='2' d='m1 1 6 6 6-6' />
    </svg>
  );
};

export const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <path
        fill='#737373'
        d='M14.973 4a5.711 5.711 0 0 1-1.64.46 2.866 2.866 0 0 0 1.253-1.587 5.761 5.761 0 0 1-1.813.7 2.816 2.816 0 0 0-2.107-.906 2.857 2.857 0 0 0-2.846 2.86c0 .226.026.446.073.653A8.13 8.13 0 0 1 2 3.193a2.83 2.83 0 0 0-.387 1.433c0 .994.5 1.874 1.273 2.374-.473 0-.913-.133-1.3-.333v.02c0 1.386.987 2.546 2.294 2.806-.42.115-.86.131-1.287.047a2.854 2.854 0 0 0 2.667 1.987 5.68 5.68 0 0 1-3.554 1.226 5.83 5.83 0 0 1-.68-.04A8.096 8.096 0 0 0 5.413 14c5.253 0 8.14-4.36 8.14-8.14 0-.127 0-.247-.007-.373.56-.4 1.04-.907 1.427-1.487Z'
      />
    </svg>
  );
};

export const DevToIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_86_26570)'>
        <path
          d='M12.25 0H3.75C1.67893 0 0 1.67893 0 3.75V12.25C0 14.3211 1.67893 16 3.75 16H12.25C14.3211 16 16 14.3211 16 12.25V3.75C16 1.67893 14.3211 0 12.25 0Z'
          fill='white'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.46094 9.20106C5.46094 9.83975 5.0675 10.8074 3.82225 10.8054H2.25V5.1875H3.85544C5.05638 5.1875 5.46025 6.15375 5.46063 6.79281L5.46094 9.20106ZM3.91138 6.23869C4.04288 6.23869 4.17469 6.28794 4.30613 6.38637C4.43725 6.48481 4.50337 6.63287 4.50362 6.82981V9.19462C4.50362 9.39187 4.438 9.53956 4.3065 9.63806C4.175 9.7365 4.04319 9.78575 3.91169 9.78575H3.32044V6.23869H3.91138Z'
          fill='#333333'
        />
        <path
          d='M8.87237 6.19079H7.06699V7.49523H8.17062V8.49923H7.06699V9.80335H8.87274V10.8074H6.76574C6.38762 10.8172 6.07318 10.5177 6.06368 10.1389V5.89098C6.05455 5.51241 6.35374 5.19798 6.73156 5.18848H8.87274L8.87237 6.19079ZM12.3842 10.1052C11.9369 11.1493 11.1356 10.9415 10.7767 10.1052L9.47112 5.18885H10.5747L11.5815 9.04998L12.5834 5.18885H13.6874L12.3842 10.1052Z'
          fill='#333333'
        />
      </g>
      <defs>
        <clipPath id='clip0_86_26570'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const RightArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
      className={props.className}
    >
      <path
        fill='#fff'
        d='M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z'
        className={props.className}
      />
    </svg>
  );
};

export const CodeWarsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <g clipPath='url(#a)'>
        <path
          fill='#737373'
          d='m.508 8.133-.055-.026a.687.687 0 0 1-.278-.294 1.017 1.017 0 0 1-.136-.5l.013-.086c0-.133.034-.253.094-.367l.055-.1c.026-.054.065-.1.099-.145a.175.175 0 0 0 .034-.162L.3 6.346a1.419 1.419 0 0 1-.065-.398l-.021-.08a.6.6 0 0 1 .133-.402l.067-.086a.373.373 0 0 1 .2-.133c.066-.02.113-.088.12-.166l.014-.227c0-.18.086-.346.219-.469l.161-.12c.032-.031.065-.065.091-.12a.163.163 0 0 0 .034-.133c-.013-.065 0-.086.034-.094.107.042.175.029.222-.026l.086-.112.24-.268a.26.26 0 0 0 .051-.278l-.078-.175c-.013-.039 0-.086.034-.099.086 0 .146.032.172.086l.026.047c.042.08.136.12.2.086a1.09 1.09 0 0 1 .38-.065h.214a.299.299 0 0 0 .295-.255.779.779 0 0 1 .185-.432c.101-.115.213-.2.346-.268a.564.564 0 0 0 .315-.399.716.716 0 0 1 .313-.466l.508-.286.146-.089a.957.957 0 0 0 .234-.2l.133-.16a.451.451 0 0 1 .214-.132.639.639 0 0 1 .24-.026l.265.018c.133 0 .24.034.346.08l.068.034c.067.026.133.013.166-.034l.06-.034.287-.3a.261.261 0 0 1 .234-.08.836.836 0 0 1 .253.089.66.66 0 0 0 .333.09h.068c.146 0 .291.022.44.055l.099.026a.257.257 0 0 0 .265-.094.061.061 0 0 1 .094-.013c.021.013.026.026.034.047.013.133.094.235.2.266l.108.034a.532.532 0 0 1 .278.2c.068.1.149.2.24.266l.067.067a.312.312 0 0 0 .253.086h.393c.161 0 .315.029.469.094.146.068.3.08.437.026.149-.044.302-.065.456-.044l.286.044c.133.016.266.08.347.183l.034.031c.065.068.133.154.198.248a.25.25 0 0 0 .226.133h.414c.102 0 .2.02.282.067.086.065.159.133.226.2l.065.087c.08.094.12.219.115.354 0 .107.08.198.185.198l.135.015c.094 0 .172.065.22.151l.067.136.172.385c.025.06.034.124.028.188 0 .065.018.12.065.146l.068.047a.305.305 0 0 1 .12.281l-.047.313-.013.133a.215.215 0 0 0 .08.2.312.312 0 0 1 .151.253v.133c0 .067-.013.148-.065.2a.321.321 0 0 0-.067.2l.02.154c0 .107.066.2.134.266a.418.418 0 0 1 .161.281c.026.167.032.3.032.433v.153c0 .055 0 .107.02.16a.24.24 0 0 0 .087.122l.133.099c.135.086.229.2.281.354.068.146.086.3.086.453v.052c0 .12-.013.247-.052.36a.484.484 0 0 0 .018.333c.055.094.089.2.102.315a.634.634 0 0 1-.034.372l-.013.047a.597.597 0 0 1-.154.214c-.067.067-.133.107-.172.153-.041.039-.067.107-.047.167l.018.094a.74.74 0 0 1 0 .385v.055a1.258 1.258 0 0 1-.107.265.49.49 0 0 1-.198.2l-.101.066a.178.178 0 0 0-.08.148.256.256 0 0 1-.066.172l-.101.136a.614.614 0 0 1-.245.198 1.557 1.557 0 0 0-.235.2.733.733 0 0 0-.146.268.224.224 0 0 1-.221.185h-.36c-.094 0-.18.068-.219.149a.903.903 0 0 1-.153.245.562.562 0 0 0-.136.24c-.013.08-.078.135-.146.106a.167.167 0 0 0-.213.068c-.068.117-.15.224-.245.32l-.047.04a.533.533 0 0 1-.302.12c-.12 0-.18.054-.198.132a1.219 1.219 0 0 0-.042.23 1.148 1.148 0 0 1-.065.218l-.034.04c-.067.1-.12.2-.187.286l-.026.041a.61.61 0 0 1-.334.232c-.142.047-.29.07-.44.068h-.094a.227.227 0 0 0-.18.107l-.038.067-.042.078-.086.149a.5.5 0 0 1-.3.24c-.14.033-.283.046-.426.038l-.107-.013a.6.6 0 0 1-.266-.067c-.067-.026-.161 0-.2.067a.458.458 0 0 1-.235.175l-.2.065a.875.875 0 0 1-.42 0l-.107-.034a.381.381 0 0 1-.187-.065.36.36 0 0 0-.198-.042l-.089.016a.98.98 0 0 1-.372-.034l-.18-.042a.368.368 0 0 1-.2-.153.266.266 0 0 0-.2-.133H6.6a.491.491 0 0 1-.334-.167l-.265-.252-.094-.08-.146-.108-.086-.065a.783.783 0 0 0-.35-.133l-.398-.067c-.041 0-.067-.013-.107-.021l-.153-.034a.303.303 0 0 1-.18-.133c-.039-.065-.114-.094-.18-.065-.132.052-.239.065-.346.086h-.094a.985.985 0 0 1-.495-.086.88.88 0 0 1-.364-.295.54.54 0 0 0-.35-.226l-.184-.04a1.112 1.112 0 0 1-.388-.16.709.709 0 0 1-.253-.287.842.842 0 0 1-.094-.334v-.052a.326.326 0 0 0-.232-.286.976.976 0 0 1-.367-.2.475.475 0 0 1-.148-.347l.015-.295a.369.369 0 0 0-.114-.286.41.41 0 0 1-.133-.287l-.021-.24a3.625 3.625 0 0 0-.086-.52.337.337 0 0 1 .146-.38l.047-.034A.166.166 0 0 0 .9 9.812l-.054-.065a.462.462 0 0 0-.2-.133C.592 9.6.58 9.547.58 9.513l.065-.08a.126.126 0 0 0 0-.16.32.32 0 0 1-.086-.187L.546 8.62c0-.094.013-.188.04-.279.028-.08 0-.174-.079-.213v.005Zm6.599-.88c.047-.047.039-.133 0-.167a.592.592 0 0 1-.154-.18L6.886 6.8a.907.907 0 0 0-.172-.227L6.7 6.56a.54.54 0 0 1-.154-.2.21.21 0 0 1 0-.2l.04-.066a.49.49 0 0 0 .067-.24v-.028a.378.378 0 0 0-.068-.198.796.796 0 0 1-.065-.187V5.4a.274.274 0 0 1 .052-.234.773.773 0 0 0 .115-.265v-.016a.257.257 0 0 0-.029-.219.245.245 0 0 1-.026-.213l.047-.133A.971.971 0 0 1 6.86 4l.094-.1.067-.08.04-.04a.132.132 0 0 0 .012-.16.31.31 0 0 1-.039-.201l.013-.094a.786.786 0 0 1 .154-.373l.026-.026a.737.737 0 0 1 .372-.268l.183-.065c.078-.026.133-.114.133-.2 0-.107.034-.2.093-.287l.032-.034c.067-.112.148-.226.2-.346l.047-.086a.138.138 0 0 0 .021-.068c0-.112-.067-.213-.174-.219l-.292-.02c-.166-.014-.333 0-.495 0l-.565.067c-.088 0-.153.065-.161.159a.217.217 0 0 1-.146.2l-.24.065-.067.021-.2.068a.556.556 0 0 0-.334.3l-.052.085a.807.807 0 0 1-.32.354.488.488 0 0 0-.214.386v.067a.667.667 0 0 1-.133.36l-.034.054a.215.215 0 0 0-.034.227.528.528 0 0 1 .047.252v.354a.222.222 0 0 1-.133.198.284.284 0 0 0-.18.2l-.034.134a.341.341 0 0 0 .133.349.526.526 0 0 1 .2.346v.12a.465.465 0 0 0 .214.334c.12.08.214.2.266.333l.034.107a.365.365 0 0 0 .307.245h.04c.12 0 .226.068.294.175a.43.43 0 0 0 .291.2l.188.052a.73.73 0 0 1 .307.18l.013.015a.172.172 0 0 0 .235-.028l.047-.052-.01-.008Zm.76-.612c.065.039.133.018.159-.042l.02-.031A1.51 1.51 0 0 1 8.22 6.3l.135-.2c.018 0 .026-.014.032-.027l.161-.213a.346.346 0 0 1 .24-.112.216.216 0 0 0 .2-.133.503.503 0 0 1 .146-.255l.034-.04a.646.646 0 0 1 .2-.132c.087-.013.167-.029.248-.029h.198c.08 0 .149-.031.188-.099a.38.38 0 0 1 .166-.146l.068-.028c.107-.045.226-.078.346-.091l.133-.013c.08 0 .167 0 .248.044a.177.177 0 0 0 .219-.013l.047-.026a.747.747 0 0 1 .333-.133h.013c.128-.022.258-.03.388-.02h.065a.527.527 0 0 1 .334.166l.02.026a.408.408 0 0 0 .266.122h.115a.1.1 0 0 0 .086-.047.134.134 0 0 1 .086-.041H13c.094 0 .18.026.266.054l.114.047c.107.032.22.065.334.078h.08c.052 0 .086-.031.086-.078a.345.345 0 0 0-.047-.187l-.047-.107c-.052-.086-.094-.18-.133-.266l-.013-.034a.21.21 0 0 1 0-.2v-.034A.114.114 0 0 0 13.574 4h-.052a.547.547 0 0 1-.268-.18l-.065-.067a.599.599 0 0 1-.136-.266c-.031-.086-.104-.153-.198-.153h-.281a.374.374 0 0 1-.248-.146l-.026-.034a.868.868 0 0 1-.112-.227c-.034-.067-.107-.107-.174-.086l-.08.026a.916.916 0 0 1-.4.052l-.106-.013a.517.517 0 0 1-.308-.112l-.067-.047a.673.673 0 0 0-.167-.094c-.065-.026-.12-.013-.159.034l-.034.04a.453.453 0 0 1-.252.132l-.36.021a.263.263 0 0 0-.18.08.387.387 0 0 1-.182.092h-.013c-.065 0-.133.047-.198.094v.013a.34.34 0 0 1-.242.101l-.026.013c-.08 0-.159 0-.24.021h-.08a.289.289 0 0 0-.226.232l-.026.154a.685.685 0 0 1-.133.286c-.068.08-.149.133-.248.133h-.112c-.067.016-.135.089-.122.167a.976.976 0 0 1-.018.315l-.026.112a.31.31 0 0 1-.183.213l-.039.021h-.013c-.039.026-.067.086-.034.133.038.06.055.13.047.2l-.02.214a.494.494 0 0 1-.066.22.205.205 0 0 0-.013.2l.065.146a.288.288 0 0 1 .021.213.479.479 0 0 0-.026.2c0 .068.04.134.094.162l.025.026Zm5.266 4.82c.067.065.166.091.247.04l.133-.087a.374.374 0 0 0 .146-.2V11.2l.068-.2.039-.068.028-.065.026-.047a.202.202 0 0 1 .133-.115l.026-.013c.055-.013.089-.065.089-.12 0-.065.031-.12.065-.166l.054-.047.133-.172v-.013a.499.499 0 0 0 .08-.183.333.333 0 0 0-.028-.198l-.013-.028a.659.659 0 0 1-.047-.172l-.018-.188-.02-.2c0-.065.025-.133.067-.198a.836.836 0 0 0 .107-.188v-.026l.013-.013c.013-.067-.021-.135-.08-.135-.068-.032-.134-.086-.154-.167l-.021-.039a1.415 1.415 0 0 1-.052-.36l.013-.333v-.02a.203.203 0 0 0-.2-.201h-.014a.442.442 0 0 1-.333-.133l-.052-.068-.136-.15-.172-.201a1.546 1.546 0 0 0-.221-.255.506.506 0 0 0-.266-.146l-.133-.021a.686.686 0 0 1-.226-.091c-.055-.042-.133-.029-.188.026l-.086.094-.041.026c-.047.013-.091-.013-.112-.068A.34.34 0 0 1 12 6.287v-.04c0-.046-.04-.08-.08-.067h-.108a.82.82 0 0 1-.351-.065l-.068-.028a.498.498 0 0 0-.219-.052.38.38 0 0 0-.2.052l-.026.02a.557.557 0 0 1-.268.087h-.22a.436.436 0 0 0-.267.088.817.817 0 0 1-.279.104l-.18.029a.596.596 0 0 0-.241.112.566.566 0 0 1-.245.133l-.034.015a.476.476 0 0 0-.266.198l-.08.08a.18.18 0 0 0 0 .214c.039.068.12.086.2.068l.1-.042c.051-.018.114 0 .158.026a.218.218 0 0 0 .162.047l.166-.018c.094 0 .188 0 .279.026a.801.801 0 0 1 .268.133.486.486 0 0 0 .265.107c.102.013.2.034.295.068l.065.013a.278.278 0 0 1 .161.133.414.414 0 0 1 .065.2v.021c0 .078.068.133.136.133h.039c.107 0 .221.013.333.047l.047.018a.39.39 0 0 1 .18.136.577.577 0 0 1 .107.198l.02.094c.019.101.027.2.027.307v.034c0 .065.047.133.12.16a.854.854 0 0 1 .221.08l.032.013c.088.052.174.12.24.2l.033.047a.529.529 0 0 1 .133.352v.047c0 .101-.018.2-.052.294-.026.08 0 .175.086.2l.047.035a.588.588 0 0 1 .253.198.585.585 0 0 1 .094.333v.2a.402.402 0 0 1-.065.167.141.141 0 0 0 0 .162l.039.065.01-.008ZM8.867 8.047h-.013c-.029 0-.042.034-.034.068l.026.133c.026.107.039.213.054.32a.404.404 0 0 0 .146.266h.026a.438.438 0 0 1 .167.32v.334a.232.232 0 0 0 .041.187l.032.032c.061.076.096.17.101.268l.018.367c0 .086-.052.159-.133.172l-.065.013c-.047 0-.067.054-.067.101 0 .052.02.112.039.167v.013a.479.479 0 0 1 .02.2l-.025.18c-.025.13-.07.256-.133.372l-.047.08a.29.29 0 0 1-.136.134.23.23 0 0 0-.133.146l-.052.24a1.468 1.468 0 0 1-.174.4h-.013a.939.939 0 0 1-.3.266l-.08.054-.2.1a.21.21 0 0 0-.12.16l-.032.22a.547.547 0 0 1-.162.333l-.086.102-.101.099-.1.107a.359.359 0 0 1-.333.114l-.24-.047-.22-.028h-.06c-.027.028-.032.067-.014.107.047.08.12.135.2.135l.147.026c.067 0 .148.034.213.065.068.047.133.08.214.102h.013c.088.034.18.039.268.034l.099-.016a.59.59 0 0 1 .312.042l.08.026c.035.013.087 0 .12-.034a.399.399 0 0 1 .134-.086l.054-.013a.902.902 0 0 1 .266-.042h.054c.078 0 .154.016.22.055l.025.013c.047.02.102 0 .136-.04a.373.373 0 0 1 .112-.132l.166-.115.107-.067.055-.032a.425.425 0 0 1 .24-.067l.239-.021a.24.24 0 0 0 .2-.172.754.754 0 0 1 .133-.287c.068-.088.133-.161.2-.226a.463.463 0 0 1 .266-.107h.055a.223.223 0 0 0 .18-.227v-.448a.745.745 0 0 1 .077-.219l.136-.2.052-.068c.041-.034.067-.078.114-.133l.065-.086c.042-.067.042-.153-.013-.213a.456.456 0 0 1-.112-.253v-.028a.862.862 0 0 1 .018-.334v-.031a1.25 1.25 0 0 1 .136-.255.153.153 0 0 0-.021-.214l-.115-.099a.49.49 0 0 1-.159-.32l-.013-.133c0-.042 0-.086-.013-.133l-.013-.102a.386.386 0 0 0-.174-.265l-.047-.013a.64.64 0 0 1-.188-.18.657.657 0 0 1-.099-.255l-.02-.112c0-.041-.027-.067-.066-.086l-.32-.101a.38.38 0 0 1-.18-.112h-.013c-.041-.055-.107-.055-.148-.016l-.065.068c-.013.02-.029.026-.047.02-.042 0-.068-.033-.055-.067a.3.3 0 0 0-.112-.278l-.088-.068-.198-.133c-.055-.02-.136 0-.162.065l-.026.042c0 .013-.02.018-.026.026-.028 0-.067 0-.067-.034l-.021-.034c-.018-.04-.065-.065-.107-.078l-.015-.034Zm-.8.667-.034-.034c-.034-.026-.067-.021-.101.013a.946.946 0 0 0-.107.255v.013c-.018.086-.1.146-.18.133h-.078a.17.17 0 0 0-.166.172c0 .12-.042.242-.115.333l-.039.042a.567.567 0 0 1-.268.18l-.052.012a.18.18 0 0 0-.133.146c0 .068-.041.136-.094.188l-.067.052a.505.505 0 0 1-.32.148l-.334.034c-.107 0-.198.065-.266.167a.4.4 0 0 1-.265.18l-.149.012a.968.968 0 0 1-.333-.013l-.065-.013-.183-.047a.14.14 0 0 0-.159.047l-.067.086a.387.387 0 0 1-.334.133l-.432-.052c-.068 0-.12-.034-.18-.067-.067-.04-.114-.086-.161-.133l-.167-.2a.112.112 0 0 0-.086-.014l-.094.04-.372.093c-.068.021-.154 0-.22-.039a.35.35 0 0 0-.228-.067h-.086a.149.149 0 0 0-.112.127.15.15 0 0 0 .005.06l.026.133a.292.292 0 0 1-.018.214c-.034.067-.026.133.018.2l.041.052c.052.08.133.149.2.214.066.067.134.133.186.221l.101.18a.262.262 0 0 0 .24.146c.099 0 .2.034.278.099l.2.187c.055.047.134.055.188.013l.034-.013c.04 0 .065.026.065.068v.034c0 .086.068.166.154.198l.3.067c.106.034.213.068.314.133h.052a.097.097 0 0 0 .071-.032.096.096 0 0 0 .023-.075v-.232c0-.067.026-.135.08-.161l.035-.013c.031.013.065.039.052.067v.112c0 .086.026.167.086.227a.213.213 0 0 0 .226.054c.08-.034.162-.041.248-.034l.247.013c.12.013.232 0 .334-.047.12-.039.219-.094.312-.166l.04-.026.2-.18a.335.335 0 0 1 .234-.101h.266a.313.313 0 0 0 .268-.266l.026-.133c0-.088.039-.166.099-.234a.562.562 0 0 1 .2-.133l.08-.034a.434.434 0 0 0 .24-.266l.04-.161a.7.7 0 0 1 .2-.352l.013-.015c.08-.065.094-.198.041-.292l-.02-.047a.277.277 0 0 1-.022-.252 1.18 1.18 0 0 1 .12-.255l.068-.094c.026-.052.026-.133-.013-.18a.306.306 0 0 1-.068-.185l-.013-.094v-.226a.494.494 0 0 0-.02-.222l-.027-.078-.003-.02Zm-.953-.508v-.018c0-.068-.041-.107-.094-.107h-.174a.455.455 0 0 1-.188 0h-.3c-.153 0-.299-.029-.445-.068l-.161-.039-.133-.041-.3-.1a.564.564 0 0 1-.354-.299l-.034-.067c-.047-.1-.146-.154-.245-.133-.114 0-.226 0-.333-.052l-.08-.034c-.154-.068-.266-.2-.266-.38l-.029-.18a.29.29 0 0 0-.159-.213 1.736 1.736 0 0 1-.268-.154l-.031-.02a.722.722 0 0 1-.235-.313l-.013-.04a.629.629 0 0 1-.013-.333l.013-.041a.898.898 0 0 0 .034-.266.317.317 0 0 0-.094-.221L3.118 5a.485.485 0 0 1-.18-.354 1.561 1.561 0 0 1 .014-.427v-.04a.133.133 0 0 0-.133-.132h-.021c-.086 0-.16.052-.2.133a.75.75 0 0 1-.147.24l-.026.033-.2.2a.456.456 0 0 0-.12.266c-.013.102-.04.2-.08.295l-.014.034a.476.476 0 0 1-.153.2.286.286 0 0 0-.112.211l-.013.308c0 .133-.021.268-.068.4l-.013.053a.173.173 0 0 0 .08.221l.28.12.025.013c.021 0 .029.013.034.034.021.026 0 .065-.02.065l-.066.034c-.039.013-.067.055-.08.102l-.013.065v.013l-.068.375c-.013.052-.013.112-.013.172a.13.13 0 0 0 .08.12l.147.067c.067.04.148.086.2.133l.068.055a.23.23 0 0 0 .078.065l.028.026c.046.04.079.094.094.153l.065.3c0 .08.068.148.133.166l.107.034s.021 0 .034.013l.133.042a.72.72 0 0 1 .282.172c.08.067.159.153.226.247l.026.026c.055.068.133.102.214.08.08-.02.166-.025.252-.025h.102c.065 0 .153.018.226.065.065.041.154.067.232.101h.021a.25.25 0 0 0 .235-.026.375.375 0 0 1 .24-.08l.312.018c.067 0 .133-.013.166-.065h.013l.115-.107.034-.034a.29.29 0 0 1 .21-.1h.303c.078 0 .153-.067.185-.132a.254.254 0 0 1 .18-.136l.135-.026c.052 0 .099-.047.12-.107a.312.312 0 0 1 .099-.159l.107-.107a.37.37 0 0 0 .114-.213l-.013.005Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h16v16H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};
export const CodePenIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <path
        fill='#737373'
        d='m11 8.801-2.334 1.555v2.398L12.798 10 11 8.8ZM9.798 8 8 6.8 6.202 8 8 9.198 9.798 8Zm3.535-.755L12.202 8l1.131.754V7.245ZM12.798 6 8.666 3.246v2.397L11 7.198 12.798 6ZM5 7.198l2.333-1.555V3.246L3.202 6 5 7.198ZM3.202 10l4.131 2.754v-2.398L5 8.801 3.202 10Zm-.536-1.246L3.798 8l-1.132-.755v1.51ZM1.333 6a.667.667 0 0 1 .297-.555l6-4a.667.667 0 0 1 .74 0l6 4a.666.666 0 0 1 .296.555v4a.665.665 0 0 1-.296.554l-6 4a.667.667 0 0 1-.74 0l-6-4A.666.666 0 0 1 1.333 10V6Z'
      />
    </svg>
  );
};

export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <g clipPath='url(#a)'>
        <path
          fill='#737373'
          d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h16v16H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <path
        fill='#737373'
        d='M12.667 2A1.333 1.333 0 0 1 14 3.333v9.334A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h9.334Zm-.334 10.333V8.8a2.173 2.173 0 0 0-2.173-2.173c-.567 0-1.227.346-1.547.866v-.74h-1.86v5.58h1.86V9.047a.93.93 0 1 1 1.86 0v3.286h1.86ZM4.587 5.707a1.12 1.12 0 0 0 1.12-1.12 1.124 1.124 0 1 0-1.12 1.12Zm.926 6.626v-5.58H3.667v5.58h1.846Z'
      />
    </svg>
  );
};

export const FreeCodeCampIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <g clipPath='url(#a)'>
        <path
          fill='#737373'
          d='M13.257 2.604a.414.414 0 0 0-.236.08c-.054.053-.108.13-.108.209 0 .133.158.316.449.615 1.215 1.17 1.825 2.602 1.821 4.33-.004 1.91-.646 3.446-1.896 4.635-.262.236-.37.42-.371.578 0 .078.053.158.107.236.063.062.146.1.235.108.29 0 .693-.342 1.222-1.006 1.028-1.26 1.493-2.652 1.52-4.55.023-1.898-.572-3.184-1.736-4.513-.42-.475-.769-.721-1.007-.722Zm-10.513.001c-.239 0-.588.247-1.007.722C.572 4.656-.023 5.943.001 7.841c.026 1.897.491 3.288 1.52 4.549.527.665.932 1.007 1.221 1.006a.382.382 0 0 0 .235-.108c.053-.077.106-.158.106-.235 0-.158-.108-.343-.37-.578C1.464 11.285.82 9.751.817 7.84c-.004-1.728.606-3.16 1.821-4.33.291-.299.45-.481.449-.615 0-.078-.054-.155-.108-.209a.414.414 0 0 0-.236-.08h.001Zm4.704.597s.437 1.387-1.766 4.485c-2.104 2.955.697 4.766.955 4.924-.188-.12-1.334-1 .268-3.616.31-.513.717-.98 1.222-2.027 0 0 .447.63.214 1.999-.349 2.067 1.514 1.476 1.542 1.504.651.767-.538 2.114-.611 2.156-.072.04 3.397-2.087.933-5.29-.169.168-.388.961-.845.844-.456-.116 1.417-2.33-1.912-4.979Zm-.811 9.409.025.016-.025-.016Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h16v16H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FrondendMentorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <path
        fill='#737373'
        d='M15.512 8.388a.448.448 0 0 1-.2-.047l-4.188-2.098a.509.509 0 0 1-.21-.202.594.594 0 0 1 0-.593.509.509 0 0 1 .21-.202l4.189-2.091a.442.442 0 0 1 .373-.011c.12.052.219.155.271.287a.607.607 0 0 1 .01.418.527.527 0 0 1-.257.303l-3.19 1.593 3.191 1.599c.102.05.185.14.236.25.05.112.066.24.043.362a.559.559 0 0 1-.17.31.457.457 0 0 1-.308.122ZM9.804 16c-4.605 0-8.63-3.477-9.788-8.456a.602.602 0 0 1 .051-.414.498.498 0 0 1 .298-.252.443.443 0 0 1 .37.057.543.543 0 0 1 .225.333c.51 2.19 1.656 4.127 3.256 5.51 1.6 1.382 3.566 2.131 5.588 2.13.13 0 .253.058.345.16a.58.58 0 0 1 .143.386.58.58 0 0 1-.143.386.463.463 0 0 1-.345.16ZM8.123 11.467a.463.463 0 0 1-.345-.16.58.58 0 0 1-.143-.385V.546A.58.58 0 0 1 7.778.16.463.463 0 0 1 8.123 0c.13 0 .253.058.345.16a.58.58 0 0 1 .143.386v10.376a.58.58 0 0 1-.143.386.463.463 0 0 1-.345.16Z'
      />
    </svg>
  );
};

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <g clipPath='url(#a)'>
        <path
          fill='#737373'
          d='M9.982 2.288a8.756 8.756 0 0 0-3.963 0c-.754-.462-1.329-.674-1.747-.764a2.315 2.315 0 0 0-.544-.056 1.342 1.342 0 0 0-.247.03l-.01.002-.005.002h-.003l.146.513-.146-.512a.533.533 0 0 0-.342.294 3.328 3.328 0 0 0-.17 2.241 3.578 3.578 0 0 0-.817 2.287c0 1.657.488 2.77 1.321 3.486.584.501 1.292.768 2.002.92a2.496 2.496 0 0 0-.123 1.022v.638c-.434.09-.735.062-.95-.008-.267-.089-.473-.267-.67-.523a5.118 5.118 0 0 1-.289-.429l-.06-.099a9.772 9.772 0 0 0-.24-.378c-.202-.3-.503-.675-.99-.803l-.515-.135-.271 1.032.516.136c.085.021.196.101.379.369.07.106.137.213.202.322l.073.117c.1.162.215.342.349.517.27.352.637.707 1.184.887.373.124.797.154 1.282.079v1.992a.533.533 0 0 0 .533.533h4.267a.533.533 0 0 0 .533-.534v-3.8c0-.336-.015-.644-.11-.931.707-.15 1.41-.416 1.99-.918.833-.72 1.32-1.845 1.32-3.511v-.001a3.578 3.578 0 0 0-.82-2.267 3.328 3.328 0 0 0-.169-2.24.533.533 0 0 0-.34-.295l-.146.512c.146-.512.145-.512.144-.512l-.002-.001-.005-.002-.01-.003a1.344 1.344 0 0 0-.248-.03 2.318 2.318 0 0 0-.544.057c-.417.09-.992.302-1.745.764Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h16v16H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GitLabIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <path
        fill='#737373'
        d='m14.442 6.658-.019-.048-1.812-4.73a.474.474 0 0 0-.471-.299.474.474 0 0 0-.436.348L10.48 5.68H5.52L4.295 1.93a.474.474 0 0 0-.434-.35.48.48 0 0 0-.472.3L1.575 6.618l-.02.046a3.371 3.371 0 0 0 1.117 3.893l.007.004.016.013 2.764 2.07 1.367 1.034.831.63a.562.562 0 0 0 .678 0l.83-.63 1.368-1.035 2.78-2.082.008-.005a3.37 3.37 0 0 0 1.12-3.897Z'
      />
    </svg>
  );
};

export const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <path
        fill='#737373'
        d='M8.162 2.667c.356.002 1.247.01 2.194.048l.336.015c.952.045 1.904.122 2.377.253.63.177 1.125.693 1.292 1.348.267 1.04.3 3.068.304 3.56V8.107c-.004.491-.037 2.52-.304 3.56a1.874 1.874 0 0 1-1.292 1.347c-.473.131-1.425.209-2.377.253l-.336.016c-.947.037-1.838.046-2.194.048h-.326c-.754-.004-3.904-.038-4.907-.317a1.875 1.875 0 0 1-1.292-1.348c-.267-1.04-.3-3.068-.304-3.56v-.216c.004-.492.037-2.52.304-3.56A1.872 1.872 0 0 1 2.93 2.984c1.002-.28 4.153-.313 4.906-.317h.326Zm-1.496 3v4.666l4-2.333-4-2.333Z'
      />
    </svg>
  );
};

export const TwitchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
    >
      <path
        fill='#737373'
        d='M7.76 3.954h.954v2.853H7.76m2.62-2.854h.954v2.854h-.954M4.667 1.333l-2.38 2.38v8.574H5.14v2.38l2.387-2.38h1.9L13.714 8V1.333m-.954 6.194-1.9 1.9H8.954l-1.667 1.667V9.427H5.14v-7.14h7.62v5.24Z'
      />
    </svg>
  );
};

export const StackOverflowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='17'
      fill='none'
      viewBox='0 0 16 17'
    >
      <g clipPath='url(#a)'>
        <path
          fill='#737373'
          d='M12.655 15.075v-4.268h1.425V16.5H1.229v-5.693h1.419v4.268h10.008Zm-8.583-1.421h7.162v-1.425H4.072v1.425Zm.175-3.235 6.988 1.458.299-1.38L4.55 9.042l-.303 1.378Zm.906-3.37 6.47 3.019.601-1.3-6.468-3.02-.602 1.292-.001.01Zm1.81-3.19L12.44 8.43l.906-1.082L7.87 2.781l-.902 1.075-.005.004ZM10.499.5l-1.163.862 4.27 5.736 1.164-.861L10.5.5Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 .5h16v16H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const UploadImageIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
      {...props}
    >
      <path
        fill={props.fill || '#633CFF'}
        d='M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z'
      />
    </svg>
  );
};
