
const CheckListItem = ({ title }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.86 17.9999C9.58283 17.999 9.31847 17.8832 9.13 17.6799L4.27 12.5099C3.89168 12.1068 3.91183 11.4733 4.315 11.0949C4.71816 10.7166 5.35168 10.7368 5.73 11.1399L9.85 15.5299L18.26 6.32994C18.4925 6.04035 18.8664 5.90351 19.231 5.97455C19.5955 6.04559 19.8907 6.31281 19.9975 6.66853C20.1043 7.02424 20.0051 7.40985 19.74 7.66994L10.6 17.6699C10.4133 17.8769 10.1487 17.9965 9.87 17.9999H9.86Z" fill="#8E33FF" />
            </svg>
            <span className="text-gray-800 text-center text-base">{title}</span>
        </div>
    )
}

export default CheckListItem