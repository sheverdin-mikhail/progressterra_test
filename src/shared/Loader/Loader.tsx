import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = () => {

    return (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    );
}