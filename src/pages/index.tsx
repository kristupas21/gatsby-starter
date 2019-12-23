import React, { useState } from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import cx from 'classnames';
import SEO from '../components/seo';
import { RootState } from '../state/reducers';
import { setAppLoadingStatus as _setAppLoadingStatus } from '../state/app/appActions';
import './index.scss';

interface Props {
  isLoading: boolean;
  setAppLoadingStatus: typeof _setAppLoadingStatus;
}

const IndexPage = ({ isLoading, setAppLoadingStatus }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const setStatus = e => {
    e.preventDefault();
    setAppLoadingStatus(loading);
    setLoading(!loading);
  };

  const appClasses = cx('app', {
    'app--loading': isLoading,
  });

  return (
    <>
      <div className={appClasses}>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        {isLoading && <div className="loader">LOADING...</div>}
      </div>
      <button type="button" onClick={setStatus}>
        SET LOADING
      </button>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: state.app.isLoading,
});

const mapDispatchToProps = {
  setAppLoadingStatus: _setAppLoadingStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
